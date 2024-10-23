import React, { useState } from 'react';
import { createPaymentAccount } from '../../services/UserPaymentAccountService';

const CreatePaymentAccount = () => {
  const [name, setName] = useState('');
  const [accunt, setAccunt] = useState('');
  const [network, setNetwork] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newAccount = await createPaymentAccount({ name, accunt, network });
      setMessage(`Payment account created: ${newAccount.id}`);
    } catch (error) {
      setMessage(`Error creating account: ${error.message}`);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-center mb-4">Create Payment Account</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Name (Can be Name of preferred coin or Bank Name):
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Account/Wallet:</label>
          <input
            type="text"
            value={accunt}
            onChange={(e) => setAccunt(e.target.value)}
            required
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Network/Bank:</label>
          <input
            type="text"
            value={network}
            onChange={(e) => setNetwork(e.target.value)}
            required
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-[#4a094d] text-white font-bold py-2 rounded hover:bg-[#590b5c] transition duration-200"
        >
          Add Account
        </button>
        {message && (
          <p className="mt-4 text-center text-sm text-green-600">
            {message}
          </p>
        )}
      </form>
    </div>
  );
};

export default CreatePaymentAccount;
