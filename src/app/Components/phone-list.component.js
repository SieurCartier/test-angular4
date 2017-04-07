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
var core_1 = require("@angular/core");
var Phone_service_1 = require("../Services/Phone.service");
var PhoneListComponent = (function () {
    function PhoneListComponent(phoneService) {
        this.phoneService = phoneService;
        this.userQuery = '';
        this.orderProp = 'age';
    }
    PhoneListComponent.prototype.ngOnInit = function () {
        this.getPhones();
    };
    PhoneListComponent.prototype.getPhones = function () {
        var _this = this;
        this.phoneService.getPhones().then(function (phones) { return _this.phones = phones; });
    };
    PhoneListComponent.prototype.filtered = function (phones) {
        var _this = this;
        return (phones) ? phones.filter(function (element) {
            var regex = new RegExp(_this.userQuery, 'i');
            return regex.test(element.name);
        }) : phones;
    };
    PhoneListComponent.prototype.ordered = function (phones) {
        var _this = this;
        return (phones) ? phones.sort(function (premier, deuxieme) {
            return (_this.orderProp === 'age') ?
                premier[_this.orderProp] < deuxieme[_this.orderProp] :
                premier[_this.orderProp].localeCompare(deuxieme[_this.orderProp]);
        }) : phones;
    };
    return PhoneListComponent;
}());
PhoneListComponent = __decorate([
    core_1.Component({
        selector: 'phone-list',
        templateUrl: '../../Templates/phone-list.component.html'
    }),
    __metadata("design:paramtypes", [Phone_service_1.PhoneService])
], PhoneListComponent);
exports.PhoneListComponent = PhoneListComponent;
//# sourceMappingURL=phone-list.component.js.map