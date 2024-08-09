import React from 'react';

const CarList = ({ cars }) => {
  return (
    <div className="car-list">
      <h2>Parked Cars</h2>
      <ul>
        {cars.map((car) => (
          <li key={car.numPlate}>
            {car.numPlate} - {car.carBrand} - {car.carColor} - {car.parkingSpot}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CarList;
