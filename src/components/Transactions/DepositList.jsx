import React, { useEffect, useState } from 'react';
import { getDeposits } from '../../services/transactionService';

const DepositList = () => {
  const [deposits, setDeposits] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDeposits = async () => {
      try {
        const data = await getDeposits();
        setDeposits(data);
      } catch (error) {
        console.error('Error fetching deposits:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchDeposits();
  }, []);

  if (loading) return <p>Loading deposits...</p>;

  // Function to get text color based on deposit status
  const getTextColor = (status) => {
    if (status === 'approved') return 'text-green-900'; // Green text for approved
    if (status === 'pending') return 'text-yellow-900'; // Yellow text for pending
    if (status === 'rejected') return 'text-red-900'; // Red text for rejected
    return 'text-gray-600'; // Default gray for other statuses
  };

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Deposit List</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead className="bg-black">
            <tr>
              <th className="text-left px-6 py-3 text-white font-medium">Amount</th>
              <th className="text-left px-6 py-3 text-white font-medium">Date</th>
              <th className="text-left px-6 py-3 text-white font-medium">Status</th>
            </tr>
          </thead>
          <tbody>
            {deposits.map((deposit, index) => (
              <tr key={deposit.id || index} className="border-b border-gray-200">
                <td className="px-6 py-4">{deposit.amount}</td>
                <td className="px-6 py-4">{new Date(deposit.date).toLocaleDateString()}</td>
                <td className={`px-6 py-4 capitalize ${getTextColor(deposit.status)}`}>
                  {deposit.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DepositList;
