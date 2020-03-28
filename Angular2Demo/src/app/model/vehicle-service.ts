import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Vehicle } from './vehicle';

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

    private vehicles :Vehicle[];

    constructor(private httpClient: HttpClient) {
        this.vehicles = vehicles;
    }

    getVehicles() {
        console.log("VehicleService.getVehicles");

        console.log("Call REST api");

        console.log("added HttpClient to constructor");

        console.log("do call");
        this.httpClient.get("http://localhost:8080/RestService/api/vehicle");
        console.log("GET done");

        return this.vehicles;
    }

}