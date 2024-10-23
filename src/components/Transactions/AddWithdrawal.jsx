import React, { useEffect, useState } from 'react';
import { addWithdrawal } from '../../services/transactionService';
import { listPaymentAccounts } from '../../services/UserPaymentAccountService'; // Adjust the path as needed
import { useAuth } from '../../AuthContext'; // Import the Auth context

const AddWithdrawal = () => {
  const { user } = useAuth(); // Get the authenticated user from context
  const [amount, setAmount] = useState('');
  const [withdrawalAccountId, setWithdrawalAccountId] = useState('');
  const [paymentAccounts, setPaymentAccounts] = useState([]);
  const [message, setMessage] = useState('');
  
  useEffect(() => {
    const fetchPaymentAccounts = async () => {
      try {
        if (user) {
          const accounts = await listPaymentAccounts();
          setPaymentAccounts(accounts);
        }
      } catch (error) {
        console.error('Error fetching payment accounts:', error);
      }
    };

    fetchPaymentAccounts();
  }, [user]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addWithdrawal({
        amount: parseFloat(amount).toFixed(2), // Ensure proper formatting
        withdrawal_account: withdrawalAccountId // Include selected account
      });
      setMessage('Withdrawal added successfully!');
      setAmount(''); // Reset amount input after successful withdrawal
      setWithdrawalAccountId(''); // Reset selected account
    } catch (error) {
      console.error('Error adding withdrawal:', error);
      setMessage('Failed to add withdrawal.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#ffffff] p-6">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Add Withdrawal</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="amount" className="block text-sm font-medium text-gray-700">Amount</label>
            <input
              type="number"
              id="amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Enter withdrawal amount"
              required
              min="0" // Ensure amount cannot be negative
            />
          </div>

          <div>
            <label htmlFor="withdrawalAccount" className="block text-sm font-medium text-gray-700">Select Withdrawal Account</label>
            <select
              id="withdrawalAccount"
              value={withdrawalAccountId}
              onChange={(e) => setWithdrawalAccountId(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
            >
              <option value="">Choose an account</option>
              {paymentAccounts.map((account) => (
                <option key={account.id} value={account.id}>
                  {account.name} - {account.accunt} ({account.network})
                </option>
              ))}
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-[#77018C] hover:bg-[#6f017a] text-white font-semibold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Add Withdrawal
          </button>
        </form>
        {message && (
          <p className={`mt-4 text-center ${message.includes('successfully') ? 'text-green-500' : 'text-red-500'}`}>
            {message}
          </p>
        )}
      </div>
    </div>
  );
};

export default AddWithdrawal;
