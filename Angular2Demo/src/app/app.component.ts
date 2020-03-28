import { Component } from '@angular/core';
import { environment } from '../environment';
import { firstName } from './derek';

// Component Decorator
// Provides Metadata about component and is used by Angular to create View
@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
})
export class AppComponent {
    name = firstName;

    constructor() {
        console.log("constructor-AppComponent");
        console.log("Version 2");
    }
}


