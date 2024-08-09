import React, { useState } from 'react';
import PropTypes from 'prop-types';

const ParkingTicketForm = ({ onCarParked, availableSpots }) => {
  const [numPlate, setNumPlate] = useState('');
  const [carColor, setCarColor] = useState('');
  const [carBrand, setCarBrand] = useState('');
  const [selectedSpot, setSelectedSpot] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate number plate format (e.g., AP39BC2345)
    const plateRegex = /^[A-Z]{2}\d{2}[A-Z]{2}\d{4}$/;
    if (!plateRegex.test(numPlate)) {
      setErrorMessage('* Invalid number plate format. Use Format like: TSxxABxxxx');
      return;
    }

    // Check if a spot is selected
    if (!selectedSpot) {
      setErrorMessage('Please select a parking spot.');
      return;
    }

    // Clear error message and call the parent function to park the car
    setErrorMessage('');
    onCarParked({ numPlate, carColor, carBrand, parkingSpot: selectedSpot });
    setNumPlate('');
    setCarColor('');
    setCarBrand('');
    setSelectedSpot('');
  };

  return (
    <div className="parking-ticket-form">
      <h2>Generate Parking Ticket</h2>
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
        <div className="form-group">
          <label htmlFor="carColor">Car Color:</label>
          <input
            type="text"
            id="carColor"
            value={carColor}
            onChange={(e) => setCarColor(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="carBrand">Car Brand:</label>
          <input
            type="text"
            id="carBrand"
            value={carBrand}
            onChange={(e) => setCarBrand(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Parking Spot:</label>
          <div className="available-spots">
            {availableSpots.map((spot, index) => (
              <div 
                key={index} 
                className={`spot-box ${selectedSpot === spot ? 'selected' : ''}`}
                onClick={() => setSelectedSpot(spot)}
              >
                {spot}
              </div>
            ))}
          </div>
        </div>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <button type="submit">Park Car</button>
      </form>
    </div>
  );
};

ParkingTicketForm.propTypes = {
  onCarParked: PropTypes.func.isRequired,
  availableSpots: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ParkingTicketForm;
