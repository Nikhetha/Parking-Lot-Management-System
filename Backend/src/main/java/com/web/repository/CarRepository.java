package com.web.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.web.model.CarModel;

public interface CarRepository extends JpaRepository<CarModel, Integer> {
    CarModel findByNumPlate(String numPlate);
    void deleteByNumPlate(String numPlate);
    CarModel findByParkingSpot(String parkingSpot);
}
