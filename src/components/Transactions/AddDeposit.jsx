import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { addDeposit } from '../../services/transactionService';
import { useAuth } from '../../AuthContext';

const AddDeposit = () => {
  const [amount, setAmount] = useState('');
  const [investmentType, setInvestmentType] = useState('crypto'); 
  const [message, setMessage] = useState('');
  const { isAuthenticated } = useAuth(); 
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login'); 
    }
  }, [isAuthenticated, navigate]);

  const validateAmount = () => {
    const parsedAmount = parseFloat(amount);
    if (investmentType === 'gold' && parsedAmount < 400) {
      return "The minimum deposit amount for gold is $400.";
    }
    if (investmentType === 'crypto' && parsedAmount < 5000) {
      return "The minimum deposit amount for crypto is $5000.";
    }
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate amount based on investment type
    const validationError = validateAmount();
    if (validationError) {
      setMessage(validationError);
      return;
    }

    const payload = {
      investment_type: investmentType,
      amount: parseFloat(amount).toFixed(2) // Ensure proper formatting
    };

    try {
      const response = await addDeposit(payload);
      if (response && response.data && response.data.message) {
        setMessage(response.data.message); // Display backend response message
      } else {
        setMessage('Deposit added successfully!');
      }
      // Redirect to the complete deposit page
      navigate('/dashboard/comfirm-deposit');
    } catch (error) {
      console.error('Error adding deposit:', error);
      if (error.response && error.response.data && error.response.data.amount) {
        setMessage(error.response.data.amount); // Display backend validation error
      } else {
        setMessage('Failed to add deposit. Please try again.');
      }
    }
  };

  return (
    <div className="min-h-full flex items-center justify-center bg-[#ffffff]">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Initiate Deposit</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="investmentType" className="block text-sm font-medium text-gray-700">Investment Type</label>
            <select
              id="investmentType"
              value={investmentType}
              onChange={(e) => setInvestmentType(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
            >
              <option value="crypto">Crypto</option>
              <option value="gold">Gold</option>
            </select>
          </div>

          <div>
            <label htmlFor="amount" className="block text-sm font-medium text-gray-700">Amount</label>
            <input
              type="number"
              id="amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Enter deposit amount"
              required
              min={investmentType === 'gold' ? '400' : '5000'} // Adjust minimum based on type
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#77018C] hover:bg-[#6f017a] text-white font-semibold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Initiate Deposit
          </button>
        </form>
        
        {message && (
          <p className={`mt-4 text-center ${message.includes('successfully') ? 'text-green-500' : 'text-red-500'}`}>
            {message}
          </p>
        )}
        
        {/* Additional information after initiating deposit */}
        <div className="mt-8 bg-gray-50 p-4 rounded-md">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Next Steps After Initiating Deposit</h3>
          <p className="text-gray-600">
            After you initiate a deposit, you will be redirected to complete the deposit where you will find the payment methods using cryptocurrency. Please ensure to:
          </p>
          <ul className="list-disc list-inside text-gray-600 mt-2">
            <li>Deposit the exact amount initiated into any of the wallets displayed on the next page.</li>
            <li>Convert the equivalent amount if you're not remitting USDT.</li>
            <li>Provide the necessary information on remittance, including the wallet credited and the transaction hash (ID).</li>
          </ul>
          <p className="text-gray-600 mt-2">
            The transaction hash is a unique identifier for your transaction on the blockchain, and you can find it in the transaction details within your wallet or blockchain explorer. Accurate information is crucial to avoid any delays in processing your deposit.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AddDeposit;
