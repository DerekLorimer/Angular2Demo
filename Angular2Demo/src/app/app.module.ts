import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { PersonListComponent } from './person-list';
import { VehicleListComponent } from './model/vehicle-list';

@NgModule({
    imports: [BrowserModule,HttpClientModule],
    declarations: [AppComponent, PersonListComponent, VehicleListComponent],
    providers: [HttpClientModule],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
