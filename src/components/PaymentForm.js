import React, { useState } from 'react';
import axios from 'axios';
import './PaymentForm.css';

const PaymentForm = () => {
  const [formData, setFormData] = useState({
    account_number: '',
    amount: '',
    msisdn: '',
    event_name: ''
  });
  
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setResponse(null);

    try {
      const payload = {
        channel: "mpesa",
        amount: formData.amount,
        account_number: formData.account_number,
        msisdn: formData.msisdn,
        event_name: formData.event_name
      };

      const result = await axios.post(
        `${process.env.REACT_APP_API_URL || '/api'}/v1/payments/intialize`,
        payload,
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Basic MjU0NzE3Mjg2MDI2OnMwYXNjQW5uM3JANTZZZWFyc0xhdGVyIQ=='
          }
        }
      );

      setResponse(result.data);
    } catch (err) {
      setError(err.response?.data || err.message || 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="payment-container">
      <div className="payment-card">
        <div className="payment-header">
          <h1>SoldOut Africa Payment</h1>
          <p>Initialize your M-Pesa payment</p>
        </div>

        <form onSubmit={handleSubmit} className="payment-form">
          <div className="form-group">
            <label htmlFor="account_number">Account Number</label>
            <input
              type="text"
              id="account_number"
              name="account_number"
              value={formData.account_number}
              onChange={handleChange}
              placeholder="Enter account number"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="amount">Amount (KES)</label>
            <input
              type="number"
              id="amount"
              name="amount"
              value={formData.amount}
              onChange={handleChange}
              placeholder="Enter amount"
              min="1"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="msisdn">Phone Number</label>
            <input
              type="tel"
              id="msisdn"
              name="msisdn"
              value={formData.msisdn}
              onChange={handleChange}
              placeholder="254XXXXXXXXX"
              pattern="^254[0-9]{9}$"
              required
            />
            <small>Format: 254XXXXXXXXX (e.g., 254724512285)</small>
          </div>

          <div className="form-group">
            <label htmlFor="event_name">Event Name</label>
            <input
              type="text"
              id="event_name"
              name="event_name"
              value={formData.event_name}
              onChange={handleChange}
              placeholder="Enter event name"
              required
            />
          </div>

          <button 
            type="submit" 
            className="submit-btn"
            disabled={loading}
          >
            {loading ? 'Processing...' : 'Initialize Payment'}
          </button>
        </form>

        {error && (
          <div className="error-message">
            <h3>Error:</h3>
            <pre>{JSON.stringify(error, null, 2)}</pre>
          </div>
        )}

        {response && (
          <div className="success-message">
            <h3>Success!</h3>
            <pre>{JSON.stringify(response, null, 2)}</pre>
          </div>
        )}
      </div>
    </div>
  );
};

export default PaymentForm;
