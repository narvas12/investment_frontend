import React, { useEffect, useState } from 'react';
import { listPaymentAccounts } from '../../services/UserPaymentAccountService'; // Adjust the path as needed
import { useAuth } from '../../AuthContext'; // Import the Auth context

const PaymentAccountsList = () => {
  const { user } = useAuth(); // Get the authenticated user from context
  const [paymentAccounts, setPaymentAccounts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPaymentAccounts = async () => {
      try {
        if (user) { // Ensure the user is authenticated
          const accounts = await listPaymentAccounts(); // Adjust your backend to fetch user-specific accounts
          setPaymentAccounts(accounts);
        }
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchPaymentAccounts();
  }, [user]); // Fetch accounts only when user changes

  if (loading) return <div className="text-center text-lg">Loading...</div>;
  if (error) return <div className="text-center text-red-600">Error: {error.message}</div>;

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-center mb-4">Payment Accounts</h2>
      <ul className="space-y-4">
        {paymentAccounts.map((account) => (
          <li key={account.id} className="p-4 border rounded-md shadow-sm hover:shadow-md transition duration-200">
            <strong className="text-lg">{account.name}</strong>
            <p className="text-gray-600">{account.accunt}</p>
            <span className="text-gray-500">({account.network})</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PaymentAccountsList;
