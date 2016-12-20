import { Observable } from 'rxjs';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, APP_INITIALIZER } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EnvConfiguration } from "./providers/env-configuration";


export function envConfigurationFactory(config: EnvConfiguration) {
  return () => config.load();
}

@NgModule({
  declarations: [
  ],
  providers: [
    EnvConfiguration,
    { provide: APP_INITIALIZER,
      useFactory: envConfigurationFactory,
      deps: [EnvConfiguration],
      multi: true },
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
export class GLIonic2EnvConfigurationModule {}
