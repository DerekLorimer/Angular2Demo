import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Vehicle } from './vehicle';
import { Observable } from 'rxjs/Observable';

const vehicles = [
    {
        id: 1,
        name: 'Trailer - 1',
        type: 'Truck',
        mass: 40
    },
    {
        id: 2,
        name: 'An-2',
        type: 'Plane',
        mass: 5
    },
    {
        id: 3,
        name: 'LandCruiser 80',
        type: 'Jeep',
        mass: 2
    },
];

@Injectable()
export class VehicleService {

    private vehicles: Vehicle[] = [];
    // var arr: Criminal[] = [];

  
    constructor(private httpClient: HttpClient) {
    }

    vehicleURL = "http://localhost:8080/RestService/api/vehicle";
    getVehicleJson(): Observable<any> {
        return this.httpClient.get(this.vehicleURL, { responseType: 'json' });
    } 

    getVehicles() {

        var vehicleList: Vehicle[] = [];
        console.log("VehicleService.getVehicles");

        


        console.log("Call REST api");

        console.log(this.vehicles.length);

        console.log("added HttpClient to constructor");

        this.getVehicleJson().subscribe(data => {
            console.log("Parse Json Array" + data);
            this.vehicles = data;
            console.log(data[0].name);
            console.log("push data item");
            for (var item in data) {
                console.log("item" );
            }

            data.forEach((element : Vehicle) => {
                console.log("element test" + element.name);
                console.log(this.vehicles.length);
                this.vehicles.push(new Vehicle(element.name));
                vehicleList.push(new Vehicle(element.name));
                 console.log("after push" + vehicleList.length);
            });

            console.log(this.vehicles.length);

            //vehicles.push(data[0]);
         
            }
        );

        console.log("GET done - 2 return vehicles");
      //  console.log(this.vehicles[0].name);
        console.log(this.vehicles.length);

        console.log("VehicleList " + vehicleList.length);

        return vehicleList;
    }

}