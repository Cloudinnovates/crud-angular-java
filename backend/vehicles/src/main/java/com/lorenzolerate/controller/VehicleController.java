package com.lorenzolerate.controller;

import java.util.List;

import com.google.gson.Gson;

import com.lorenzolerate.model.Vehicle;
import com.lorenzolerate.service.VehicleService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "*")
public class VehicleController {

	@Autowired
	VehicleService vehicleService;

	@RequestMapping(value = "/getAllVehicles", method = RequestMethod.GET, produces = "application/json")
	public String getVehicles(Model model) {
		List<Vehicle> listOfVehicles = vehicleService.getAllVehicles();
		return new Gson().toJson(listOfVehicles);
	}

	@RequestMapping(value = "/getVehiclesByType/{idType}", method = RequestMethod.GET, produces = "application/json")
	public String getVehiclesByType(@PathVariable int idType) {
		List<Vehicle> listOfVehicles = vehicleService.getVehiclesByType(idType);
		return new Gson().toJson(listOfVehicles);
	}

	@RequestMapping(value = "/getVehicle/{idVehicle}", method = RequestMethod.GET, produces = "application/json")
	public String getVehicleById(@PathVariable int idVehicle) {
		Vehicle vehicle = vehicleService.getVehicle(idVehicle);
		return new Gson().toJson(vehicle);
	}

	@RequestMapping(value = "/addVehicle", method = RequestMethod.POST, headers = "Accept=application/json")
	public void addVehicle(@RequestBody Vehicle vehicle) {
		if (vehicle.getIdVehicle() == 0) {
			vehicleService.addVehicle(vehicle);
		} else {
			vehicleService.updateVehicle(vehicle);
		}
	}

	@RequestMapping(value = "/updateVehicle", method = RequestMethod.POST, headers = "Accept=application/json")
	public void updateVehicle(@RequestBody Vehicle vehicle) {
		vehicleService.updateVehicle(vehicle);
	}

	@RequestMapping(value = "/deleteVehicle/{id}", method = RequestMethod.GET, headers = "Accept=application/json")
	public void deleteVehicle(@PathVariable("id") int id) {
		vehicleService.deleteVehicle(id);

	}
}
