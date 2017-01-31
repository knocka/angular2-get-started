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
var people_service_1 = require('./people.service');
var PeopleListComponent = (function () {
    function PeopleListComponent(_peopleService) {
        this._peopleService = _peopleService;
        this.people = [];
        console.log("DEBUG> PeopleService constructor");
    }
    PeopleListComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log("DEBUG> ngOnInit()");
        //this.people = this._peopleService.getAll();
        this._peopleService.getAll().subscribe(function (p) { return _this.people = p; });
    };
    PeopleListComponent.prototype.selectPerson = function (person) {
        console.log("DEBUG> selectPerson()");
        this.selectedPerson = person;
    };
    PeopleListComponent = __decorate([
        core_1.Component({
            selector: 'people-list',
            template: "\n  <!-- this is the new syntax for ng-repeat -->\n  <ul>\n    <li *ngFor=\"let person of people\">\n    <a href=\"#\" [routerLink]=\"['/persons', person.id]\">\n     {{person.name}} - wright({{person.weight}}) height({{person.height}})\n     </a>\n    </li>\n  </ul>\n  <b>\n   <ul>\n    <li *ngFor=\"let person1 of people\" (click)=\"selectPerson(person1)\">\n     {{person1.name}} - wright({{person1.weight}}) height({{person1.height}})\n    </li>\n  </ul>\n  <personx-details [personx]=\"selectedPerson\"></personx-details>\n  "
        }), 
        __metadata('design:paramtypes', [people_service_1.PeopleService])
    ], PeopleListComponent);
    return PeopleListComponent;
}());
exports.PeopleListComponent = PeopleListComponent;
//# sourceMappingURL=people-list.component.js.map