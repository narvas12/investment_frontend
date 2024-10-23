// src/components/PaymentMethodList.js
import React, { useEffect, useState } from 'react';
import PaymentMethodService from '../services/paymentMethodService';

const PaymentMethodList = () => {
  const [paymentMethods, setPaymentMethods] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPaymentMethods = async () => {
      try {
        const data = await PaymentMethodService.fetchAll();
        setPaymentMethods(data);
      } catch (err) {
        setError('Failed to load payment methods');
      } finally {
        setLoading(false);
      }
    };

    fetchPaymentMethods();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h2>Payment Methods</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Wallet</th>
            <th>Network</th>
          </tr>
        </thead>
        <tbody>
          {paymentMethods.length > 0 ? (
            paymentMethods.map((method) => (
              <tr key={method.id}>
                <td>{method.name}</td>
                <td>{method.wallet}</td>
                <td>{method.network}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3">No payment methods found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default PaymentMethodList;
