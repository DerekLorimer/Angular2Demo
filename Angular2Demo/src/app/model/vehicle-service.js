"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var vehicle_1 = require("./vehicle");
var vehicles = [
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
var VehicleService = /** @class */ (function () {
    // var arr: Criminal[] = [];
    function VehicleService(httpClient) {
        this.httpClient = httpClient;
        this.vehicles = [];
        this.vehicleURL = "http://localhost:8080/RestService/api/vehicle";
    }
    VehicleService.prototype.getVehicleJson = function () {
        return this.httpClient.get(this.vehicleURL, { responseType: 'json' });
    };
    VehicleService.prototype.getVehicles = function () {
        var _this = this;
        var vehicleList = [];
        console.log("VehicleService.getVehicles");
        console.log("Call REST api");
        console.log(this.vehicles.length);
        console.log("added HttpClient to constructor");
        this.getVehicleJson().subscribe(function (data) {
            console.log("Parse Json Array" + data);
            _this.vehicles = data;
            console.log(data[0].name);
            console.log("push data item");
            for (var item in data) {
                console.log("item");
            }
            data.forEach(function (element) {
                console.log("element test" + element.name);
                console.log(_this.vehicles.length);
                _this.vehicles.push(new vehicle_1.Vehicle(element.name));
                vehicleList.push(new vehicle_1.Vehicle(element.name));
                console.log("after push" + vehicleList.length);
            });
            console.log(_this.vehicles.length);
            //vehicles.push(data[0]);
        });
        console.log("GET done - 2 return vehicles");
        //  console.log(this.vehicles[0].name);
        console.log(this.vehicles.length);
        console.log("VehicleList " + vehicleList.length);
        return vehicleList;
    };
    VehicleService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], VehicleService);
    return VehicleService;
}());
exports.VehicleService = VehicleService;
//# sourceMappingURL=vehicle-service.js.map