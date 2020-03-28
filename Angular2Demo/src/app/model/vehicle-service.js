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
    function VehicleService() {
        this.vehicles = vehicles;
    }
    VehicleService.prototype.getVehicles = function () {
        console.log("VehicleService.getVehicles");
        return this.vehicles;
    };
    VehicleService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], VehicleService);
    return VehicleService;
}());
exports.VehicleService = VehicleService;
//# sourceMappingURL=vehicle-service.js.map