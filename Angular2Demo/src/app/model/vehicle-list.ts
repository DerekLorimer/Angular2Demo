import { Component, OnInit } from '@angular/core';
import { Vehicle } from './Vehicle';
import { VehicleService } from './vehicle-service';

@Component({
    selector: 'vehicle-list',
    templateUrl : './vehicle-list.html',
    providers: [VehicleService]
})

 export class VehicleListComponent implements OnInit {

    vehicles: Vehicle[];

    constructor(private vehicleService: VehicleService) {
        this.vehicles = this.vehicleService.getVehicles();
    }

    ngOnInit() {
    }

}

