// src/components/PendingWithdrawalsTransactions.jsx

import React, { useEffect, useState } from 'react';
import { API } from '../../../api/apiEndpoints';
import axiosInstance from '../../../utils/axiosConfig';

const PendingWithdrawalsTransactions = () => {
  const [withdrawals, setWithdrawals] = useState([]);
  const [selectedWithdrawals, setSelectedWithdrawals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchWithdrawals = async () => {
    try {
      const response = await axiosInstance.get(API.TRANSACTIONS.WITHDRAWALS);
      setWithdrawals(response.data.filter(withdrawal => withdrawal.status === 'pending'));
    } catch (err) {
      setError(err.response?.data?.detail || 'Error fetching withdrawals');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWithdrawals();
  }, []);

  const handleWithdrawalSelect = (transactionId) => {
    setSelectedWithdrawals((prev) => {
      if (prev.includes(transactionId)) {
        return prev.filter(id => id !== transactionId);
      }
      return [...prev, transactionId];
    });
  };

  const handleApproveWithdrawals = async () => {
    try {
      await Promise.all(selectedWithdrawals.map(id =>
        axiosInstance.patch(API.TRANSACTIONS.UPDATE_WITHDRAWAL_STATUS, {
          transaction_id: id,
          status: 'approved',
        })
      ));
      setSelectedWithdrawals([]);
      await fetchWithdrawals(); // Fetch withdrawals again after approval
    } catch (err) {
      setError(err.response?.data?.detail || 'Error approving withdrawals');
      // Log the error to console for debugging
      console.error('Error approving withdrawals:', err);
    }
  };

  const handleRejectWithdrawals = async () => {
    try {
      await Promise.all(selectedWithdrawals.map(id =>
        axiosInstance.patch(API.TRANSACTIONS.UPDATE_WITHDRAWAL_STATUS, {
          transaction_id: id,
          status: 'rejected',
        })
      ));
      setSelectedWithdrawals([]);
      await fetchWithdrawals(); // Fetch withdrawals again after rejection
    } catch (err) {
      setError(err.response?.data?.detail || 'Error rejecting withdrawals');
      // Log the error to console for debugging
      console.error('Error rejecting withdrawals:', err);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p style={{ color: 'red' }}>{error}</p>;

  return (
    <div className="mb-6">
      <h3 className="text-xl font-semibold mb-2">Withdrawals</h3>
      {withdrawals.length === 0 ? (
        <p>No pending withdrawals.</p>
      ) : (
        <table className="min-w-full bg-white border border-gray-200 mb-4">
          <thead>
            <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
              <th className="py-3 px-6 text-left">Select</th>
              <th className="py-3 px-6 text-left">Withdrawal ID</th>
              <th className="py-3 px-6 text-left">Amount</th>
              <th className="py-3 px-6 text-left">Status</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm font-light">
            {withdrawals.map(withdrawal => (
              <tr key={withdrawal.id} className="border-b border-gray-200 hover:bg-gray-100">
                <td className="py-3 px-6">
                  <input
                    type="checkbox"
                    checked={selectedWithdrawals.includes(withdrawal.id)}
                    onChange={() => handleWithdrawalSelect(withdrawal.id)} 
                  />
                </td>
                <td className="py-3 px-6">{withdrawal.id}</td>
                <td className="py-3 px-6">{withdrawal.amount}</td>
                <td className="py-3 px-6">{withdrawal.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      <button className="mr-2 p-2 bg-green-500 text-white rounded" onClick={handleApproveWithdrawals}>
        Approve Selected Withdrawals
      </button>
      <button className="p-2 bg-red-500 text-white rounded" onClick={handleRejectWithdrawals}>
        Reject Selected Withdrawals
      </button>
    </div>
  );
};

export default PendingWithdrawalsTransactions;
