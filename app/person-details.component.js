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
var PersonDetailsComponent = (function () {
    function PersonDetailsComponent() {
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], PersonDetailsComponent.prototype, "person", void 0);
    PersonDetailsComponent = __decorate([
        core_1.Component({
            selector: 'person-details',
            template: "\n  <section *ngIf=\"person\">\n    <h2>You selected:  {{person.name}}</h2>\n    <h3>Description</h3>\n    <p>\n       {{person.name}} weights  {{person.weight}} and is  {{person.height}} tall.\n    </p>\n  </section>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], PersonDetailsComponent);
    return PersonDetailsComponent;
}());
exports.PersonDetailsComponent = PersonDetailsComponent;
//# sourceMappingURL=person-details.component.js.map