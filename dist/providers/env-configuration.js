var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Injectable } from '@angular/core';
var EnvConfiguration = (function () {
    function EnvConfiguration() {
        this.merrgedConfiguration = {};
    }
    EnvConfiguration.prototype.load = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var xobj = new XMLHttpRequest();
            xobj.overrideMimeType("application/json");
            xobj.open('GET', 'env-configuration.json', true);
            xobj.onreadystatechange = function () {
                if (xobj.readyState === 4) {
                    if ((xobj.status === 200 || xobj.status === 0) && xobj.responseText) {
                        window.configuration = JSON.parse(xobj.responseText);
                        _this.merrgedConfiguration = window.configuration;
                        resolve(true);
                    }
                    else {
                        console.log('could not load environment configuration file');
                        resolve(false);
                    }
                }
            };
            xobj.send(null);
        });
    };
    EnvConfiguration.prototype.getConfig = function () {
        return this.merrgedConfiguration;
    };
    return EnvConfiguration;
}());
EnvConfiguration = __decorate([
    Injectable()
], EnvConfiguration);
export { EnvConfiguration };
//# sourceMappingURL=env-configuration.js.map