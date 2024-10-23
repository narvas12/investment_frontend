import React, { useEffect, useState } from 'react';
import { getWithdrawals } from '../../services/transactionService';

const WithdrawalList = () => {
  const [withdrawals, setWithdrawals] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWithdrawals = async () => {
      try {
        const data = await getWithdrawals();
        setWithdrawals(data);
      } catch (error) {
        console.error('Error fetching withdrawals:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchWithdrawals();
  }, []);

  if (loading) return <p className="text-center text-gray-500">Loading withdrawals...</p>;

  // Function to get text color based on withdrawal status
  const getStatusTextColor = (status) => {
    if (status === 'approved') return 'text-green-700'; // Green for approved
    if (status === 'pending') return 'text-yellow-700'; // Yellow for pending
    if (status === 'rejected') return 'text-red-900'; // Red for rejected
    return 'text-gray-600'; // Default gray color for other statuses
  };

  return (
    <div className="container mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Withdrawal List</h2>
      {withdrawals.length === 0 ? (
        <p className="text-center text-gray-500">No withdrawals found.</p>
      ) : (
        <table className="min-w-full bg-white border border-gray-200 rounded-lg">
          <thead className="bg-black rounded-lg">
            <tr className="text-white uppercase text-sm leading-normal rounded-lg">
              <th className="py-3 px-6 text-left">Amount</th>
              <th className="py-3 px-6 text-left">Status</th>
              <th className="py-3 px-6 text-left">Date</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm font-light">
            {withdrawals.map((withdrawal) => (
              <tr key={withdrawal.id} className="border-b border-gray-200 hover:bg-gray-100">
                <td className="py-3 px-6">{withdrawal.amount}</td>
                <td className={`py-3 px-6 ${getStatusTextColor(withdrawal.status)}`}>
                  {withdrawal.status}
                </td>
                <td className="py-3 px-6">{new Date(withdrawal.date).toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default WithdrawalList;
