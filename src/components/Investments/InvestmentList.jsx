import React, { useEffect, useState } from 'react';
import { getInvestments } from '../../services/investmentService'; 
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa'; 

const InvestmentList = () => {
  const [investments, setInvestments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchInvestments = async () => {
      try {
        const data = await getInvestments();
        setInvestments(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchInvestments();
  }, []);

  if (loading) {
    return <div className="text-center">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500">Error fetching investments: {error.message}</div>;
  }

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Investment List</h2>
      <table className="min-w-full bg-white border border-gray-300 rounded-lg">
        <thead>
          <tr className="bg-gray-200">
            <th className="py-2 px-4 border-b">Investment Type</th>
            <th className="py-2 px-4 border-b">Amount</th>
            <th className="py-2 px-4 border-b">Date Invested</th>
            <th className="py-2 px-4 border-b">Status</th>
          </tr>
        </thead>
        <tbody>
          {investments.map((investment) => (
            <tr key={investment.id}>
              <td className="py-2 px-4 border-b">{investment.investment_type}</td>
              <td className="py-2 px-4 border-b">${Number(investment.amount).toFixed(2)}</td>
              <td className="py-2 px-4 border-b">{new Date(investment.date_invested).toLocaleDateString()}</td>
              <td className="py-2 px-4 border-b">
                {investment.is_active ? (
                  <FaCheckCircle className="text-green-500" title="Active" />
                ) : (
                  <FaTimesCircle className="text-red-500" title="Inactive" />
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default InvestmentList;
