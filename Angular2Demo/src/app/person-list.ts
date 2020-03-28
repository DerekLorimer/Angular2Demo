import { Component, OnInit } from '@angular/core';

// Component decorator

@Component({
    selector: 'person-list',
    template: '<p>Person List {{person}}</p>'
})


export class PersonListComponent implements OnInit {

    person : string = "Derek Lorimer";

    constructor() {
        
    }

    ngOnInit() {
    }

}