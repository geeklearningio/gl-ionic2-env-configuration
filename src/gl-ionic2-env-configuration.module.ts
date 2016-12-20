import { Observable } from 'rxjs';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, APP_INITIALIZER } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EnvConfigurationProvider } from "./providers/env-configuration-provider";


export function envConfigurationFactory(config: EnvConfigurationProvider<any>) {
  return () => config.load();
}

@NgModule({
  declarations: [
  ],
  providers: [
    EnvConfigurationProvider,
    { provide: APP_INITIALIZER,
      useFactory: envConfigurationFactory,
      deps: [EnvConfigurationProvider],
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
