package com.web.service;

import com.web.model.CarModel;
import com.web.model.ParkingStatus;
import com.web.repository.CarRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.Duration;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Service
public class CarServiceImpl implements CarService {

    @Autowired
    private CarRepository repo;

    @Override
    @Transactional
    public CarModel parkCar(CarModel car) throws RuntimeException {
        if (repo.findByParkingSpot(car.getParkingSpot()) != null) {
            throw new RuntimeException("Parking spot already occupied.");
        }
        car.setParkedAt(LocalDateTime.now());
        return repo.save(car);
    }

    @Override
    @Transactional
    public String exitCar(String numPlate) {
        CarModel car = repo.findByNumPlate(numPlate);
        if (car != null) {
            LocalDateTime parkedAt = car.getParkedAt();
            LocalDateTime now = LocalDateTime.now();
            long minutesParked = Duration.between(parkedAt, now).toMinutes();
            double charges = Math.ceil(minutesParked / 5.0) * 3.0;

            repo.deleteByNumPlate(numPlate);
            return String.format(
                "The car left the parking lot.\nParked for %d minutes.\nCharges: ₹%.2f",
                minutesParked, charges
            );
        } else {
            throw new RuntimeException("Car with numPlate " + numPlate + " not found");
        }
    }

    @Override
    @Transactional(readOnly = true)
    public List<CarModel> getAllCars() {
        return repo.findAll();
    }

    @Override
    @Transactional(readOnly = true)
    public ParkingStatus getParkingStatus() {
        long totalSpaces = 20;
        long occupiedSpaces = repo.count();
        long availableSpaces = totalSpaces - occupiedSpaces;
        List<String> availableSpots = getAvailableSpots(totalSpaces);

        return new ParkingStatus(totalSpaces, occupiedSpaces, availableSpaces, availableSpots);
    }

    @Override
    @Transactional(readOnly = true)
    public List<String> getAvailableSpots() {
        long totalSpaces = 20;
        return getAvailableSpots(totalSpaces);
    }

    private List<String> getAvailableSpots(long totalSpaces) {
        List<String> availableSpots = new ArrayList<>();
        for (char row = 'A'; row <= 'E'; row++) {
            for (int i = 1; i <= 5; i++) {
                String spot = row + "" + i;
                if (repo.findByParkingSpot(spot) == null) {
                    availableSpots.add(spot);
                }
            }
        }
        return availableSpots;
    }
}
