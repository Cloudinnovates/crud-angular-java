import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { VehicleType } from '../vehicle';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-add-vehicle',
  templateUrl: './add-vehicle.component.html',
  styleUrls: ['./add-vehicle.component.css']
})

@Injectable()
export class AddVehicleComponent implements OnInit {

  extractData(res: Response) {
    let body = res.json();
    return body || {};
  }

  handleErrorPromise(error: Response | any) {
    console.error(error.message || error);
    return Promise.reject(error.message || error);
  }
  typeOfVehicles: SelectItem[];

  typeSelected: VehicleType;

  photo: any;

  constructor(private http: HttpClient, private router: Router) {
    this.typeOfVehicles =
      [{ label: 'Select Type', value: null },
      { label: 'Bike', value: { idVehicleType: 1, name: 'Bike' } },
      { label: 'Motorbike', value: { idVehicleType: 2, name: 'Motorbike' } },
      { label: 'Car', value: { idVehicleType: 3, name: 'Car' } }];
  }

  addVehicle(name, description, vehicleType) {
    var jsonToPost = '{'
      + '"name" : "' + name + '",'
      + '"description" : "' + description + '",'
      + '"vehicleType" : ' + JSON.stringify(vehicleType);
      if(this.photo != undefined){
        jsonToPost += ', "photoB64" : "' + this.photo + '"';
      }
      jsonToPost += '}';

    console.log(JSON.stringify(jsonToPost));

    let url = 'https://localhost:8443/vehicles/addVehicle';
    
    console.log(jsonToPost);
    this.http.post(url, jsonToPost, httpOptions)
      .subscribe(data => this.router.navigateByUrl('/vehicles/all'));
  }

  ngOnInit() {
  }

  onUpload(event) {
    var reader = new FileReader();
    reader.readAsDataURL(event.files[0]);
    reader.onload = () => {
      this.photo = reader.result;
      console.log(this.photo);
    };
    reader.onerror = function (error) {
      console.log('Error: ', error);
    };
  }

}

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
};