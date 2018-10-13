import { Component, OnInit, Input } from '@angular/core';
import { Vehicle } from '../vehicle';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-config',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})
export class VehicleComponent implements OnInit {

  @Input('idVehicle') idVehicle: Number = this.activatedRoute.snapshot.params['idVehicle'];
  constructor(private apiService: ApiService, private activatedRoute: ActivatedRoute, private http: HttpClient) {
  }

  ngOnInit() {
    this.getVehicle();
  }

  vehicle: Vehicle = new Vehicle();

  editMode: Boolean = false;

  setEditMode(value: Boolean) {
    if (value == false) { //exiting from edit mode
      this.editVehicle(); //save changes
    }
    this.editMode = value;
  }

  editVehicle() {
    var jsonToPost = '{'
      + '"idVehicle" : "' + this.vehicle.idVehicle + '",'
      + '"name" : "' + this.vehicle.name + '",'
      + '"description" : "' + this.vehicle.description + '"' + '}';

    console.log(JSON.stringify(jsonToPost));

    let url = 'https://localhost:8443/vehicles/updateVehicle';

    console.log(jsonToPost);
    this.http.post(url, jsonToPost, httpOptions)
      .subscribe();
  }

  getVehicle() {
    let url = 'https://localhost:8443/vehicles/getAllVehicles';
    //let url = 'assets/vehicles.json';

    this.apiService.restItemsServiceGetRestItems(url)
      .subscribe(data => {
        for (let vehicleJson of data) {
          if (vehicleJson['idVehicle'] == this.idVehicle) {
            this.vehicle.idVehicle = vehicleJson['idVehicle'];
            this.vehicle.name = vehicleJson['name'];
            this.vehicle.type = vehicleJson['vehicleType']['type'];
            this.vehicle.description = vehicleJson['description'];
            this.vehicle.photo = vehicleJson['photoB64'];
            break;
          }
        }
      });
  }

}

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
};