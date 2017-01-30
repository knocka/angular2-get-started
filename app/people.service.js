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
var core_1 = require('@angular/core');
//import { SomeOtherService } from './some-other.service';
var PEOPLE = [
    { id: 1, name: 'Luke Skywalker', height: 177, weight: 70 },
    { id: 2, name: 'Darth Vader', height: 200, weight: 100 },
    { id: 3, name: 'Han Solo', height: 185, weight: 85 },
];
var PeopleService = (function () {
    function PeopleService() {
    }
    //constructor(private _someOtherService: SomeOtherService){}
    PeopleService.prototype.getAll = function () {
        console.log("DEBUG> getAll()");
        return PEOPLE;
    };
    PeopleService.prototype.get = function (id) {
        return PEOPLE.find(function (p) { return p.id === id; });
    };
    PeopleService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], PeopleService);
    return PeopleService;
}());
exports.PeopleService = PeopleService;
//# sourceMappingURL=people.service.js.map