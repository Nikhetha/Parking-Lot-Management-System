import React, { useState } from 'react';
import PropTypes from 'prop-types';

const ExitCarForm = ({ onCarExited }) => {
  const [numPlate, setNumPlate] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate number plate format (e.g., TSxxABxxxx)
    const plateRegex = /^[A-Z]{2}\d{2}[A-Z]{2}\d{4}$/;
    if (!plateRegex.test(numPlate)) {
      setErrorMessage('* Invalid number plate format. Use Format like: TSxxABxxxx');
      return;
    }

    // Clear error message and call the parent function to exit the car
    setErrorMessage('');
    onCarExited(numPlate);
    setNumPlate('');
  };

  return (
    <div className="exit-car-form">
      <h2>Exit Car</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="numPlate">Number Plate:</label>
          <input
            type="text"
            id="numPlate"
            value={numPlate}
            onChange={(e) => setNumPlate(e.target.value)}
            placeholder="TSxxABxxxx"
            maxLength="10"
            required
          />
        </div>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <button type="submit">Exit Car</button>
      </form>
    </div>
  );
};

ExitCarForm.propTypes = {
  onCarExited: PropTypes.func.isRequired,
};

export default ExitCarForm;
