import { Component, OnInit, Input } from '@angular/core';
import { Vehicle } from '../vehicle';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-config',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})
export class VehicleComponent implements OnInit {

  @Input('idVehicle') idVehicle: Number = this.activatedRoute.snapshot.params['idVehicle'];
  constructor(private apiService: ApiService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.getVehicle();
  }

  vehicle: Vehicle = new Vehicle();

  editMode: Boolean = false;

  setEditMode(value: Boolean) {
    this.editMode = value;
    console.log(this.editMode);
  }

  getVehicle() {
    console.log('getVehicle()');
    //let url = 'https://localhost:8443/vehicles/getAllVehicles';
    let url = 'assets/vehicles.json';

    this.apiService.restItemsServiceGetRestItems(url)
      .subscribe(data => {
        for (let vehicleJson of data) {
          if (vehicleJson['idVehicle'] == this.idVehicle) {
            this.vehicle.idVehicle = vehicleJson['idVehicle'];
            this.vehicle.name = vehicleJson['name'];
            this.vehicle.type = vehicleJson['vehicleType']['type'];
            this.vehicle.description = vehicleJson['description'];
            this.vehicle.photo = vehicleJson['photo'];
            break;
          }
        }
      });
  }

}
