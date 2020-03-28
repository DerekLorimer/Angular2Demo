import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { PersonListComponent } from './person-list';
import { VehicleListComponent } from './model/vehicle-list';

@NgModule({
    imports: [BrowserModule],
  declarations: [ AppComponent, PersonListComponent, VehicleListComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
