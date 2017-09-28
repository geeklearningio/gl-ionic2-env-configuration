import { NgModule, CUSTOM_ELEMENTS_SCHEMA, APP_INITIALIZER } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EnvConfigurationProvider, envConfigurationFactory } from "./providers/env-configuration-provider";

@NgModule({
  declarations: [
  ],
  providers: [
    EnvConfigurationProvider,
    {
      provide: APP_INITIALIZER,
      useFactory: envConfigurationFactory,
      deps: [EnvConfigurationProvider],
      multi: true
    }
  ],
  exports: [
  ],
  imports: [
    BrowserModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class EnvConfigurationModule { }
