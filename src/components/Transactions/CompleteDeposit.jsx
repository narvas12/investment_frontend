import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import PaymentMethodService from '../../services/paymentMethodService';
import CompleteDepositService from '../../services/CompleteDepositService';

const CompleteDeposit = () => {
  const [wallets, setWallets] = useState([]);
  const [formData, setFormData] = useState({
    wallet_credited: '',
    transaction_hash: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);  // Track form submission status
  const [message, setMessage] = useState('');  // Track success/error message
  const navigate = useNavigate(); // Initialize useNavigate for redirection

  useEffect(() => {
    // Fetch payment methods (wallets)
    const fetchPaymentMethods = async () => {
      try {
        const data = await PaymentMethodService.fetchAll();
        setWallets(data);
      } catch (error) {
        console.error('Error fetching payment methods', error);
      }
    };
    fetchPaymentMethods();
  }, []);

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage('');

    try {
      // Call the completeDeposit service
      const response = await CompleteDepositService.completeDeposit(formData);
      
      // Show success message and reset form
      setMessage('Deposit confirmed successfully!');
      setFormData({
        wallet_credited: '',
        transaction_hash: '',
      });

      // Redirect to /dashboard/overview after 2 seconds (adjust the time if needed)
      setTimeout(() => {
        navigate('/dashboard/overview');
      }, 2000);

    } catch (error) {
      console.error('Error confirming deposit:', error);
      setMessage('Failed to confirm deposit. Please try again.');
    } finally {
      setIsSubmitting(false);  // Re-enable the submit button
    }
  };

  // Function to copy wallet address to clipboard
  const copyToClipboard = (walletId) => {
    const walletInput = document.getElementById(walletId);
    walletInput.select();
    document.execCommand('copy');
    alert(`Copied to clipboard: ${walletInput.value}`);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="mt-4 text-2xl font-bold text-gray-800">Complete Deposit</h1>

      <div className="text-gray-700 bg-gray-50 p-4 rounded-lg mt-4">
        <p>
          <strong>To complete your deposit, you need to provide us with two critical pieces of information via the form below:</strong>
        </p>
        <ul className="list-disc list-inside ml-4 mt-2">
          <li>
            <strong>Wallet Credited:</strong> This is the wallet address where you sent the funds. It helps us verify which account received the deposit. You can find this information in the wallet or exchange you used to send the funds. Make sure the address matches exactly as incorrect details may delay your deposit confirmation.
          </li>
          <li className="mt-2">
            <strong>Transaction Hash (TxID):</strong> This is the unique identifier for your transaction on the blockchain. Every crypto transaction is recorded on the blockchain, and the transaction hash allows us to verify your payment. You can usually find the transaction hash in your wallet's transaction history or on the blockchain explorer associated with the network you used. It's a string of alphanumeric characters that represents your specific transaction.
          </li>
        </ul>
        <p className="mt-4">
          After submitting this information, we will process and verify your deposit. Once confirmed, the funds will be credited to your account, and you will be notified. Ensure that the details you provide are accurate to avoid any delays.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        {wallets.map((wallet, index) => (
          <div className="bg-white rounded-lg shadow-md p-4" key={index}>
            <h5 className="text-lg font-semibold">{wallet.name} ({wallet.network})</h5>
            <div className="flex mt-2">
              <input
                type="text"
                className="form-control w-full border border-gray-300 rounded-l px-4 py-2"
                value={wallet.wallet}
                id={`${wallet.name}Wallet`}
                readOnly
              />
              <button
                className="bg-[#490b53] text-white rounded-r px-4 py-2"
                onClick={() => copyToClipboard(`${wallet.name}Wallet`)}
              >
                Copy
              </button>
            </div>
          </div>
        ))}
      </div>

      <h2 className="mt-8 text-xl font-bold text-gray-800">Confirm Deposit</h2>
      <div className="mt-4">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="form-group">
            <label htmlFor="walletCredited" className="block text-gray-700">Wallet Credited</label>
            <input
              type="text"
              className="block w-full border border-gray-300 rounded-md px-4 py-2"
              id="walletCredited"
              name="wallet_credited"
              value={formData.wallet_credited}
              onChange={handleInputChange}
              placeholder="Input the wallet address you credited"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="transactionHash" className="block text-gray-700">Transaction Hash</label>
            <input
              type="text"
              className="block w-full border border-gray-300 rounded-md px-4 py-2"
              id="transactionHash"
              name="transaction_hash"
              value={formData.transaction_hash}
              onChange={handleInputChange}
              placeholder="Input the transaction hash"
              required
            />
          </div>

          <button
            type="submit"
            className={`bg-[#490b53] text-white px-6 py-2 rounded-md hover:bg-[#4f1358] ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
            disabled={isSubmitting} // Disable the button while submitting
          >
            {isSubmitting ? 'Confirming...' : 'Confirm Deposit'}
          </button>
        </form>

        {/* Show success or error message */}
        {message && (
          <p className={`mt-4 text-lg ${message.includes('successfully') ? 'text-green-600' : 'text-red-600'}`}>
            {message}
          </p>
        )}
      </div>
    </div>
  );
};

export default CompleteDeposit;
