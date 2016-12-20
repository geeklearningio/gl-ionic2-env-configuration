import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {EnvConfiguration} from "./providers/env-configuration";

@NgModule({
  declarations: [
  ],
  providers: [ EnvConfiguration ],
  exports: [
  ],
  imports: [
    BrowserModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class MyModule {}
