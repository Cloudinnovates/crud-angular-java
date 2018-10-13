package com.lorenzolerate.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.Lob;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.persistence.Transient;

import org.hibernate.annotations.Type;

@Entity
@Table(name = "vehicle")
public class Vehicle {

	@Id
	@Column(name = "idvehicle")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int idVehicle;

	@Column(name = "name")
	String name;

	@Column(name = "description")
	String description;

	@Column(name = "photob64")
	String photoB64;

	@ManyToOne
	@JoinColumn(name = "idvehicletype")
	VehicleType vehicleType;

	public Vehicle() {

	}

	public Vehicle(int idVehicle, String name, String description) {
		super();
		this.idVehicle = idVehicle;
		this.name = name;
		this.description = description;
	}

	public int getIdVehicle() {
		return idVehicle;
	}

	public void setIdVehicle(int idVehicle) {
		this.idVehicle = idVehicle;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	@Override
	public String toString() {
		return "Vehicle [idVehicle=" + idVehicle + ", name=" + name + ", type=" + vehicleType.getType() + "]";
	}

	public VehicleType getVehicleType() {
		return vehicleType;
	}

	public void setVehicleType(VehicleType vehicleType) {
		this.vehicleType = vehicleType;
	}

	public String getPhotoB64() {
		return photoB64;
	}

	public void setPhotoB64(String photoB64) {
		this.photoB64 = photoB64;
	}
}