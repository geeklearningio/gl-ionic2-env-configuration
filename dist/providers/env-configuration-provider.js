var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Injectable } from '@angular/core';
var _merge = require('lodash/merge');
var EnvConfigurationProvider = (function () {
    function EnvConfigurationProvider() {
        this.mergedConfiguration = {};
    }
    EnvConfigurationProvider.prototype.load = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var xobj = new XMLHttpRequest();
            xobj.overrideMimeType("application/json");
            xobj.open('GET', 'env-configuration.json', true);
            xobj.onreadystatechange = function () {
                if (xobj.readyState === 4) {
                    if ((xobj.status === 200 || xobj.status === 0) && xobj.responseText) {
                        _this.addConfig(JSON.parse(xobj.responseText));
                        resolve(true);
                    }
                    else {
                        console.log('Could not load environment configuration file');
                        resolve(false); // don't reject the promise, as it would completely break the app loading
                    }
                }
            };
            xobj.send(null);
        });
    };
    EnvConfigurationProvider.prototype.addConfig = function (obj) {
        if (obj) {
            this.mergedConfiguration = _merge(this.mergedConfiguration, obj);
        }
    };
    EnvConfigurationProvider.prototype.getConfig = function () {
        return this.mergedConfiguration;
    };
    return EnvConfigurationProvider;
}());
EnvConfigurationProvider = __decorate([
    Injectable()
], EnvConfigurationProvider);
export { EnvConfigurationProvider };
//# sourceMappingURL=env-configuration-provider.js.map