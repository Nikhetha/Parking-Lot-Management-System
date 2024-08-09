import React from 'react';

const ParkingLotStatus = ({ totalSpaces, occupiedSpaces, availableSpaces, availableSpots }) => {
  return (
    <div className="parking-lot-status">
      <h2>Parking Lot Status</h2>
      <p>Total Spaces: {totalSpaces}</p>
      <p>Occupied Spaces: {occupiedSpaces}</p>
      <p>Available Spaces: {availableSpaces}</p>
      <h3>Available Spots</h3>
      <div className="available-spots">
        {availableSpots.map((spot, index) => (
          <div className="spot-box" key={index}>
            {spot}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ParkingLotStatus;
