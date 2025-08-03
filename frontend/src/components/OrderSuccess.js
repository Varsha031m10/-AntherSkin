import React from 'react';
import './OrderSuccess.css';

const OrderSuccess = () => {
  return (
    <div className="success-wrapper">
      <div className="success-card">
        <div className="success-icon">🌸</div>
        <h2 className="success-title">Your Order is Blooming!</h2>
        <p className="success-message">
          Thank you for your trust in AntherSkin 💕<br />
          Your skincare delights are on their way!
        </p>
        <div className="success-footer">🌿 Stay glowing. Stay confident. 🌿</div>
      </div>
    </div>
  );
};

export default OrderSuccess;
