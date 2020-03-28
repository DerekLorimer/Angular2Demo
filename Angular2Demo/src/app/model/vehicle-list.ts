import { Component, OnInit } from '@angular/core';
import { Vehicle } from './Vehicle';

@Component({
    selector: 'vehicle-list',
    template: '<h1>Vehicle List</h1>'
})

 export class VehicleListComponent implements OnInit {

    vehicles: Vehicle[];

    constructor() { }

    ngOnInit() {
    }

}

