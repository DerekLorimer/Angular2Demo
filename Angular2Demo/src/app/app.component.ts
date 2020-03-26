import { Component } from '@angular/core';
import { environment } from '../environment';
import { firstName } from './derek';

@Component({
  selector: 'my-app',
  template: `<h1>Hello {{name}}</h1>`,
})
export class AppComponent { name = firstName}
