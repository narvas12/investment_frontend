import React, { useState, useEffect } from 'react';
import BonusService from '../../../services/BonusService';
import axiosInstance from '../../../utils/axiosConfig';

const AddBonusComponent = () => {
  const [bonusData, setBonusData] = useState({ user: '', amount: '' });
  const [users, setUsers] = useState([]); 
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axiosInstance.get('/users/'); 
        setUsers(response.data); 
      } catch (err) {
        console.error('Error fetching users:', err);
      }
    };

    fetchUsers(); 
  }, []);

  const handleAddBonus = async () => {
    setLoading(true);
    setError(null);
    setSuccess(false);
    try {
      await BonusService.addBonus(bonusData);
      setSuccess(true);
      setBonusData({ user: '', amount: '' }); 
    } catch (err) {
      setError('Error adding bonus. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg p-8 mt-10">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Add Bonus</h2>

      {/* Dropdown to select a user */}
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="user">
          Select User
        </label>
        <select
          id="user"
          value={bonusData.user}
          onChange={(e) => setBonusData({ ...bonusData, user: e.target.value })}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
        >
          <option value="">Select User</option>
          {users.map((user) => (
            <option key={user.id} value={user.id}>
              {user.first_name} {user.last_name}
            </option>
          ))}
        </select>
      </div>

      {/* Input for bonus amount */}
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="amount">
          Bonus Amount
        </label>
        <input
          type="text"
          id="amount"
          placeholder="Amount"
          value={bonusData.amount}
          onChange={(e) => setBonusData({ ...bonusData, amount: e.target.value })}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
        />
      </div>

      {/* Add Bonus Button */}
      <div className="mb-4">
        <button
          onClick={handleAddBonus}
          disabled={loading}
          className={`w-full py-2 px-4 text-white rounded-md transition duration-300 ${
            loading
              ? 'bg-gray-400 cursor-not-allowed'
              : 'bg-[#490b53] hover:bg-[#661972] focus:ring-2 focus:ring-indigo-400 focus:ring-opacity-50'
          }`}
        >
          {loading ? 'Adding...' : 'Add Bonus'}
        </button>
      </div>

      {/* Error and Success Messages */}
      {error && <p className="text-red-500 text-sm">{error}</p>}
      {success && <p className="text-green-500 text-sm">Bonus added successfully!</p>}
    </div>
  );
};

export default AddBonusComponent;
