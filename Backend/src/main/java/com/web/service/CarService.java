package com.web.service;

import com.web.model.CarModel;
import com.web.model.ParkingStatus;

import java.util.List;

public interface CarService {
    CarModel parkCar(CarModel car) throws RuntimeException;
    String exitCar(String numPlate);
    List<CarModel> getAllCars();
    ParkingStatus getParkingStatus();
    List<String> getAvailableSpots();
}
