var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, APP_INITIALIZER } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EnvConfiguration } from "./providers/env-configuration";
export function envConfigurationFactory(config) {
    return function () { return config.load(); };
}
var GLIonic2EnvConfigurationModule = (function () {
    function GLIonic2EnvConfigurationModule() {
    }
    return GLIonic2EnvConfigurationModule;
}());
GLIonic2EnvConfigurationModule = __decorate([
    NgModule({
        declarations: [],
        providers: [
            EnvConfiguration,
            { provide: APP_INITIALIZER,
                useFactory: envConfigurationFactory,
                deps: [EnvConfiguration],
                multi: true },
        ],
        exports: [],
        imports: [
            BrowserModule
        ],
        schemas: [
            CUSTOM_ELEMENTS_SCHEMA
        ]
    })
], GLIonic2EnvConfigurationModule);
export { GLIonic2EnvConfigurationModule };
//# sourceMappingURL=gl-ionic2-env-configuration.module.js.map