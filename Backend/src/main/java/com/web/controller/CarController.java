package com.web.controller;

import com.web.model.CarModel;
import com.web.service.CarService;
import com.web.model.ParkingStatus;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/cars")
public class CarController {

    @Autowired
    private CarService service;

    @PostMapping("/park")
    public String parkCar(@RequestBody CarModel car) {
        try {
            CarModel parkedCar = service.parkCar(car);
            return "Car Parked SUCCESSFULLY";
        } catch (RuntimeException e) {
            return e.getMessage();
        }
    }

    @DeleteMapping("/exit/{numPlate}")
    public String exitCar(@PathVariable String numPlate) {
        return service.exitCar(numPlate);
    }

    @GetMapping
    public List<CarModel> getAllCars() {
        return service.getAllCars();
    }

    @GetMapping("/status")
    public ParkingStatus getParkingStatus() {
        return service.getParkingStatus();
    }
}
