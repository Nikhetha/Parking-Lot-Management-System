package com.web.model;

import java.util.List;

public class ParkingStatus {
    private long totalSpaces;
    private long occupiedSpaces;
    private long availableSpaces;
    private List<String> availableSpots;
    
	public ParkingStatus() {
		super();
		// TODO Auto-generated constructor stub
	}

	public ParkingStatus(long totalSpaces, long occupiedSpaces, long availableSpaces, List<String> availableSpots) {
		super();
		this.totalSpaces = totalSpaces;
		this.occupiedSpaces = occupiedSpaces;
		this.availableSpaces = availableSpaces;
		this.availableSpots = availableSpots;
	}

	public long getTotalSpaces() {
		return totalSpaces;
	}

	public void setTotalSpaces(long totalSpaces) {
		this.totalSpaces = totalSpaces;
	}

	public long getOccupiedSpaces() {
		return occupiedSpaces;
	}

	public void setOccupiedSpaces(long occupiedSpaces) {
		this.occupiedSpaces = occupiedSpaces;
	}

	public long getAvailableSpaces() {
		return availableSpaces;
	}

	public void setAvailableSpaces(long availableSpaces) {
		this.availableSpaces = availableSpaces;
	}

	public List<String> getAvailableSpots() {
		return availableSpots;
	}

	public void setAvailableSpots(List<String> availableSpots) {
		this.availableSpots = availableSpots;
	}

	@Override
	public String toString() {
		return "ParkingStatus [totalSpaces=" + totalSpaces + ", occupiedSpaces=" + occupiedSpaces + ", availableSpaces="
				+ availableSpaces + ", availableSpots=" + availableSpots + "]";
	}
    
}