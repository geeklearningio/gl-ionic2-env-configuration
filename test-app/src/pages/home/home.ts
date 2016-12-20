import { Component } from '@angular/core';

// Note that this path won't be relative when using the npm package
import {EnvConfigurationProvider} from "../../../../../gl-ionic2-env-configuration";
import {ITestAppEnvConfiguration} from "../../env-configuration/ITestAppEnvConfiguration";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  // you can specify a typing for your configuration to get nice and neat autocompletion
  constructor(private envConfiguration: EnvConfigurationProvider<ITestAppEnvConfiguration>) {
    let config: ITestAppEnvConfiguration = envConfiguration.getConfig();
    console.log(config);
  }

}
