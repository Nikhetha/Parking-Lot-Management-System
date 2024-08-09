import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CarList from './components/CarList';
import ParkingLotStatus from './components/ParkingLotStatus';
import ParkingTicketForm from './components/ParkingTicketForm';
import ExitCarForm from './components/ExitCarForm';
import AdminLogin from './components/AdminLogin';
import Car from './images/headingCar.png';
import './App.css';

function App() {
  // State variables to hold car data, parking status, available spots, and other UI states
  const [cars, setCars] = useState([]);
  const [parkingStatus, setParkingStatus] = useState({});
  const [availableSpots, setAvailableSpots] = useState([]);
  const [activeForm, setActiveForm] = useState('');
  const [exitCarInfo, setExitCarInfo] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [showAdminLogin, setShowAdminLogin] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  // Fetch initial data when the component loads
  useEffect(() => {
    fetchCars();
    fetchParkingStatus();
    fetchAvailableSpots();
  }, []);

  // Get the list of cars from the server
  const fetchCars = async () => {
    try {
      const response = await axios.get('http://localhost:9002/cars');
      setCars(response.data);
    } catch (error) {
      console.error('Error fetching cars:', error);
    }
  };

  // Get the current parking lot status
  const fetchParkingStatus = async () => {
    try {
      const response = await axios.get('http://localhost:9002/cars/status');
      setParkingStatus(response.data);
    } catch (error) {
      console.error('Error fetching parking status:', error);
    }
  };

  // Get available parking spots
  const fetchAvailableSpots = async () => {
    try {
      const response = await axios.get('http://localhost:9002/spots/available');
      setAvailableSpots(response.data);
    } catch (error) {
      console.error('Error fetching available spots:', error);
    }
  };

  // Handle a new car being parked
  const handleCarParked = async (newCar) => {
    try {
      await axios.post('http://localhost:9002/cars/park', newCar);
      fetchCars();
      fetchParkingStatus();
      fetchAvailableSpots();
      setSuccessMessage("Your car is parked!");
      setTimeout(() => setSuccessMessage(''), 5000); // Hide message after 5 seconds
    } catch (error) {
      console.error('Error parking car:', error);
    }
  };

  // Handle a car leaving the parking lot
  const handleCarExited = async (numberPlate) => {
    try {
      const response = await axios.delete(`http://localhost:9002/cars/exit/${numberPlate}`);
      setExitCarInfo({ message: response.data });
      fetchCars();
      fetchParkingStatus();
      fetchAvailableSpots();
    } catch (error) {
      console.error('Error exiting car:', error);
    }
  };

  // Check admin login credentials
  const handleLogin = (username, password) => {
    if (username === 'Parking Head' && password === 'parking') {
      setIsAdmin(true);
      setShowAdminLogin(false);
    } else {
      alert('Incorrect credentials');
    }
  };

  // Logout and reset state
  const handleBack = () => {
    setShowAdminLogin(false);
    setIsAdmin(false);
    setActiveForm('');
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Parking Lot Management System</h1>
        <nav>
          {!isAdmin ? (
            <>
              <button onClick={() => setActiveForm('park')}>Park Car</button>
              <button onClick={() => setActiveForm('exit')}>Exit Car</button>
              <button onClick={() => setShowAdminLogin(true)}>Admin</button>
            </>
          ) : (
            <button onClick={handleBack} className="nav-button">Logout</button>
          )}
        </nav>
      </header>

      {/* Show the admin login form if needed */}
      {showAdminLogin && !isAdmin && (
        <AdminLogin onLogin={handleLogin} />
      )}

      {/* Admin view for checking parking status and list of cars */}
      {isAdmin && (
        <div className="admin-page">
          <header className="Admin-header">
            <button onClick={() => setActiveForm('status')} className="nav-button">View Status</button>
            <button onClick={() => setActiveForm('list')} className="nav-button">View Parked Cars</button>
          </header>
          <main className="Admin-main">
            {activeForm === 'status' && (
              <ParkingLotStatus
                totalSpaces={parkingStatus.totalSpaces}
                occupiedSpaces={parkingStatus.occupiedSpaces}
                availableSpaces={parkingStatus.availableSpaces}
                availableSpots={availableSpots}
              />
            )}
            {activeForm === 'list' && <CarList cars={cars} />}
          </main>
        </div>
      )}

      {/* User view for parking, exiting, and viewing information */}
      {!showAdminLogin && !isAdmin && (
        <main className="App-main">
          {activeForm === 'park' && (
            <>
              <div className="success-message-container">
                {successMessage && (
                  <>
                    <div className="success-message">{successMessage}</div>
                    <img src={Car} alt="Car" className="car-image" />
                  </>
                )}
              </div>
              <ParkingTicketForm
                onCarParked={handleCarParked}
                availableSpots={availableSpots}
              />
            </>
          )}
          {activeForm === 'exit' && (
            <ExitCarForm onCarExited={handleCarExited} exitCarInfo={exitCarInfo} />
          )}
          {activeForm === 'status' && (
            <ParkingLotStatus
              totalSpaces={parkingStatus.totalSpaces}
              occupiedSpaces={parkingStatus.occupiedSpaces}
              availableSpaces={parkingStatus.availableSpaces}
              availableSpots={availableSpots}
            />
          )}
          {activeForm === 'list' && <CarList cars={cars} />}
        </main>
      )}
    </div>
  );
}

export default App;
