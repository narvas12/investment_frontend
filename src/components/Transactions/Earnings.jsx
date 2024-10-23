import React, { useEffect, useState } from 'react';
import { getEarnings } from '../../services/earningsService';

const EarningsTable = () => {
  const [earnings, setEarnings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch earnings data
  useEffect(() => {
    const fetchEarnings = async () => {
      try {
        setLoading(true);
        const data = await getEarnings();
        setEarnings(data);
      } catch (err) {
        setError('Failed to fetch earnings data.');
      } finally {
        setLoading(false);
      }
    };

    fetchEarnings();
  }, []);

  if (loading) {
    return <div>Loading earnings data...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Earnings Table</h2>
      <table className="min-w-full bg-white border border-gray-300 shadow-md">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Investment Type</th>
            <th className="py-2 px-4 border-b">Amount Earned</th>
            <th className="py-2 px-4 border-b">Date Earned</th>
          </tr>
        </thead>
        <tbody>
          {earnings.length === 0 ? (
            <tr>
              <td colSpan="3" className="py-2 px-4 text-center">No earnings found.</td>
            </tr>
          ) : (
            earnings.map((earning) => (
              <tr key={earning.id}>
                <td className="py-2 px-4 border-b">{earning.investment_type}</td>
                <td className="py-2 px-4 border-b">${earning.amount_earned}</td>
                <td className="py-2 px-4 border-b">{new Date(earning.date_earned).toLocaleDateString()}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default EarningsTable;
