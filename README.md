#Introduction
This is an environment configuration package for Ionic2.
It allows you to dynamically load a json configuration file at the root of your app (www). 
This json will be loaded before everything else in your App.

#Usecase
For example, in a continuous integration system, we often need different API endpoints between developpment, preproduction, production and so on.
This system will allow you to change this kind of parameter in the configuration file without having to recompile your Typescript code all over.

#Example
To make it simpler, this repository contains a `test-app` folder which follows the "How to use it section". 
So if you prefer reading the code, go ahead!

#How to use it

##Install the module
Install it with npm:
```
npm install gl-ionic2-env-configuration
```

##Create or copy your configuration json file

###Simple way
Add a `env-configuration.json` file in your `www` folder containing your env configuration variables.
There is no required key needed, it's your configuration. It will surely contain your api url, your Google Analytics ID and more...
To copy the right configuration for the right environment, you will need a copy executable, as explained in the next section.

###Automatic way (use a copy executable)
I made a simpe executable that will copy the right configuration file for a specified environment:
`copy-env-config.js` which is available [here](https://github.com/geeklearningio/gl-ionic2-env-configuration/blob/master/test-app/copy-env-config.js).

Here how to use it:
```
node copy-env-config.js --env YOURENV
```
This will copy the file `src/env-configuration/YOURENV.json` to `www/env-configuration.json`

###Even more automatic
Just run this command before your ionic:serve or ionic:build command to specify the right environment configuration to copy.
For example, to build you app in prod and serve in dev, just update your `package.json` scripts like that:
```
"ionic:build": "node copy-env-config.js --env prod | ionic-app-scripts build",
"ionic:serve": "node copy-env-config.js --env dev | ionic-app-scripts serve"
```

##Use the module in your Ionic 2 app

```typescript
import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

// Import the module
import { GLIonic2EnvConfigurationModule } from 'gl-ionic2-env-configuration';

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    IonicModule.forRoot(MyApp),

    GLIonic2EnvConfigurationModule // Import the module here
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: []
})
export class AppModule {}
```

##Get the configuration in your app

```typescript
import { Component } from '@angular/core';

// Import the module
import {EnvConfigurationProvider} from "gl-ionic2-env-configuration";

// Import your configuration typings
// You can specify a typing for your configuration to get nice and neat autocompletion
import {ITestAppEnvConfiguration} from "../../env-configuration/ITestAppEnvConfiguration";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  // inject the EnvConfigurationProvider and specify the configuration typings
  constructor(private envConfiguration: EnvConfigurationProvider<ITestAppEnvConfiguration>) {
    let config: ITestAppEnvConfiguration = envConfiguration.getConfig();
    console.log(config); // And here you have your nice configuration
  }

}
```

##How it works
This modules uses a specific way to load the `EnvConfigurationProvider` which basically tells Angular to wait for this provider to load the configuration json file before loading the rest.
So for example, your API service will have the right endpoint even in its constructor.

To learn more about this specific loading, you can see this [discussion](https://github.com/angular/angular/issues/9047#issuecomment-224075188) and this [GIST file](https://gist.github.com/fernandohu/122e88c3bcd210bbe41c608c36306db9).
