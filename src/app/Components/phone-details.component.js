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
var router_1 = require("@angular/router");
var Phone_service_1 = require("../Services/Phone.service");
var PhoneDetails_1 = require("../Domain/PhoneDetails");
require("rxjs/add/operator/switchMap");
var PhoneDetailsComponent = (function () {
    function PhoneDetailsComponent(phoneService, route) {
        this.phoneService = phoneService;
        this.route = route;
        this.phoneDetails = new PhoneDetails_1.PhoneDetails();
    }
    PhoneDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .switchMap(function (params) { return _this.phoneService.getPhoneDetails(params['phoneId']); })
            .subscribe(function (phoneDetails) {
            _this.phoneDetails = phoneDetails;
            _this.mainImageUrl = _this.phoneDetails.images[0];
        });
    };
    PhoneDetailsComponent.prototype.setImage = function (img) {
        this.mainImageUrl = img;
    };
    return PhoneDetailsComponent;
}());
PhoneDetailsComponent = __decorate([
    core_1.Component({
        selector: 'phone-details',
        templateUrl: '../../Templates/phone-details.component.html'
    }),
    __metadata("design:paramtypes", [Phone_service_1.PhoneService,
        router_1.ActivatedRoute])
], PhoneDetailsComponent);
exports.PhoneDetailsComponent = PhoneDetailsComponent;
//# sourceMappingURL=phone-details.component.js.map