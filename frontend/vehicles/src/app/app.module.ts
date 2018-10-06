import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './api.service';

import { AppComponent } from './app.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { AddVehicleComponent } from './add-vehicle/add-vehicle.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { CardModule } from 'primeng/card';
import { TabMenuModule } from 'primeng/tabmenu';
import { InputTextareaModule } from 'primeng/inputtextarea';
import {FileUploadModule} from 'primeng/fileupload';

import { AppRoutingModule } from './/app-routing.module';


@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ButtonModule,
    DropdownModule,
    CardModule,
    TableModule,
    InputTextModule,
    TabMenuModule,
    AppRoutingModule,
    InputTextareaModule,
    FileUploadModule
  ],
  declarations: [
    AppComponent,
    VehicleComponent,
    VehiclesComponent,
    AddVehicleComponent],
  bootstrap: [AppComponent],
  providers: [ApiService],
})
export class AppModule { }

