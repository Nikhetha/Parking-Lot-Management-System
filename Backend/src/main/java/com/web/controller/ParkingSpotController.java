package com.web.controller;

import com.web.service.CarService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/spots")
@CrossOrigin(origins = "*")
public class ParkingSpotController {

    @Autowired
    private CarService service;

    @GetMapping("/available")
    public List<String> getAvailableSpots() {
        return service.getAvailableSpots();
    }
}
