// src/components/PendingDepositTransactions.jsx

import React, { useEffect, useState } from 'react';
import { API } from '../../../api/apiEndpoints';
import axiosInstance from '../../../utils/axiosConfig';

const PendingDepositTransactions = () => {
  const [deposits, setDeposits] = useState([]);
  const [selectedDeposits, setSelectedDeposits] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDeposits = async () => {
      try {
        const response = await axiosInstance.get(API.TRANSACTIONS.DEPOSITS);
        setDeposits(response.data.filter(deposit => deposit.status === 'pending'));
      } catch (err) {
        setError(err.response?.data?.detail || 'Error fetching deposits');
      } finally {
        setLoading(false);
      }
    };

    fetchDeposits();
  }, []);

  const handleDepositSelect = (transactionId) => {
    setSelectedDeposits((prev) => {
      if (prev.includes(transactionId)) {
        return prev.filter(id => id !== transactionId);
      }
      return [...prev, transactionId];
    });
  };

  const fetchDeposits = async () => {
    try {
      const response = await axiosInstance.get(API.TRANSACTIONS.DEPOSITS);
      setDeposits(response.data.filter(deposit => deposit.status === 'pending'));
    } catch (err) {
      setError(err.response?.data?.detail || 'Error fetching deposits');
    }
  };

  const handleApproveDeposits = async () => {
    try {
      await Promise.all(selectedDeposits.map(id =>
        axiosInstance.patch(API.TRANSACTIONS.UPDATE_DEPOSIT_STATUS, {
          transaction_id: id,
          status: 'approved',
        })
      ));
      setSelectedDeposits([]);
      await fetchDeposits();  // Fetch deposits again after approval
    } catch (err) {
      setError(err.response?.data?.detail || 'Error approving deposits');
    }
  };

  const handleRejectDeposits = async () => {
    try {
      await Promise.all(selectedDeposits.map(id =>
        axiosInstance.patch(API.TRANSACTIONS.UPDATE_DEPOSIT_STATUS, {
          transaction_id: id,
          status: 'rejected',
        })
      ));
      setSelectedDeposits([]);
      await fetchDeposits();  // Fetch deposits again after rejection
    } catch (err) {
      setError(err.response?.data?.detail || 'Error rejecting deposits');
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p style={{ color: 'red' }}>{error}</p>;

  return (
    <div className="mb-6">
      <h3 className="text-xl font-semibold mb-2">Deposits</h3>
      {deposits.length === 0 ? (
        <p>No pending deposits.</p>
      ) : (
        <table className="min-w-full bg-white border border-gray-200 mb-4">
          <thead>
            <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
              <th className="py-3 px-6 text-left">Select</th>
              <th className="py-3 px-6 text-left">Deposit ID</th>
              <th className="py-3 px-6 text-left">Amount</th>
              <th className="py-3 px-6 text-left">Status</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm font-light">
            {deposits.map(deposit => (
              <tr key={deposit.id} className="border-b border-gray-200 hover:bg-gray-100">
                <td className="py-3 px-6">
                  <input
                    type="checkbox"
                    checked={selectedDeposits.includes(deposit.id)}
                    onChange={() => handleDepositSelect(deposit.id)}
                  />
                </td>
                <td className="py-3 px-6">{deposit.id}</td>
                <td className="py-3 px-6">{deposit.amount}</td>
                <td className="py-3 px-6">{deposit.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      <button className="mr-2 p-2 bg-green-500 text-white rounded" onClick={handleApproveDeposits}>
        Approve Selected Deposits
      </button>
      <button className="p-2 bg-red-500 text-white rounded" onClick={handleRejectDeposits}>
        Reject Selected Deposits
      </button>
    </div>
  );
};

export default PendingDepositTransactions;
