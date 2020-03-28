import { Injectable } from '@angular/core';
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

    constructor() {
        this.vehicles = vehicles;
    }

    getVehicles() {
        return this.vehicles;
    }

}