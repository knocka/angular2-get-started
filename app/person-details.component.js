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
var router_1 = require('@angular/router');
var people_service_1 = require('./people.service');
var PersonDetailsComponent = (function () {
    function PersonDetailsComponent(peopleService, route, router) {
        this.peopleService = peopleService;
        this.route = route;
        this.router = router;
        this.professions = ['jedi', 'bounty hunter', 'princess', 'sith lord'];
        console.log("DEBUG>PersonDetailsComponent.constructor");
    }
    PersonDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log("DEBUG>PersonDetailsComponent.ngOnInit()");
        this.sub = this.route.params.subscribe(function (params) {
            var id = Number.parseInt(params['id']);
            _this.person = _this.peopleService.get(id);
        });
    };
    PersonDetailsComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    PersonDetailsComponent.prototype.savePersonDetails = function () {
        alert("saved!!! " + JSON.stringify(this.person));
        this.peopleService.save(this.person);
    };
    PersonDetailsComponent.prototype.gotoPeoplesList = function () {
        this.router.navigateByUrl('/persons');
    };
    PersonDetailsComponent = __decorate([
        core_1.Component({
            selector: 'person-details',
            templateUrl: 'app/person-details.component.html',
        }), 
        __metadata('design:paramtypes', [people_service_1.PeopleService, router_1.ActivatedRoute, router_1.Router])
    ], PersonDetailsComponent);
    return PersonDetailsComponent;
}());
exports.PersonDetailsComponent = PersonDetailsComponent;
//# sourceMappingURL=person-details.component.js.map