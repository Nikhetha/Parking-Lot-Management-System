package com.web.model;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
public class CarModel {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;

    @Column(unique = true)

    private String numPlate;

    private String carBrand;
    private String carColor;
    private String parkingSpot;
    private LocalDateTime parkedAt;
    
	public CarModel() {
		super();
		// TODO Auto-generated constructor stub
	}

	public CarModel(int id, String numPlate, String carBrand, String carColor, String parkingSpot,
			LocalDateTime parkedAt) {
		super();
		this.id = id;
		this.numPlate = numPlate;
		this.carBrand = carBrand;
		this.carColor = carColor;
		this.parkingSpot = parkingSpot;
		this.parkedAt = parkedAt;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getNumPlate() {
		return numPlate;
	}

	public void setNumPlate(String numPlate) {
		this.numPlate = numPlate;
	}

	public String getCarBrand() {
		return carBrand;
	}

	public void setCarBrand(String carBrand) {
		this.carBrand = carBrand;
	}

	public String getCarColor() {
		return carColor;
	}

	public void setCarColor(String carColor) {
		this.carColor = carColor;
	}

	public String getParkingSpot() {
		return parkingSpot;
	}

	public void setParkingSpot(String parkingSpot) {
		this.parkingSpot = parkingSpot;
	}

	public LocalDateTime getParkedAt() {
		return parkedAt;
	}

	public void setParkedAt(LocalDateTime parkedAt) {
		this.parkedAt = parkedAt;
	}

	@Override
	public String toString() {
		return "CarModel [id=" + id + ", numPlate=" + numPlate + ", carBrand=" + carBrand + ", carColor=" + carColor
				+ ", parkingSpot=" + parkingSpot + ", parkedAt=" + parkedAt + "]";
	}
}