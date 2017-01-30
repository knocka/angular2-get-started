"use strict";
var PeopleService = (function () {
    function PeopleService() {
    }
    PeopleService.prototype.getAll = function () {
        return [
            { name: 'Luke Skywalker', height: 177, weight: 70 },
            { name: 'Darth Vader', height: 200, weight: 100 },
            { name: 'Han Solo', height: 185, weight: 85 },
        ];
    };
    return PeopleService;
}());
exports.PeopleService = PeopleService;
//# sourceMappingURL=people.service.js.map