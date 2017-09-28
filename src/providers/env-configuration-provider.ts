import { Injectable } from '@angular/core';
import { merge } from 'lodash'

export function envConfigurationFactory(config: EnvConfigurationProvider<any>) {
  return () => config.load();
}

@Injectable()
export class EnvConfigurationProvider<T> {

  private mergedConfiguration: T = <T>{};

  constructor() {
  }

  load(): Promise<boolean> {
    return new Promise((resolve, reject) => {
      var xobj = new XMLHttpRequest();
      xobj.overrideMimeType("application/json");
      xobj.open('GET', 'env-configuration.json', true);
      xobj.onreadystatechange = () => {
        if (xobj.readyState === 4) {
          if ((xobj.status === 200 || xobj.status === 0) && xobj.responseText) {
            this.addConfig(<T>JSON.parse(xobj.responseText));
            resolve(true);
          } else {
            console.log('Could not load environment configuration file');
            resolve(false); // don't reject the promise, as it would completely break the app loading
          }
        }
      };
      xobj.send(null);
    });
  }

  public addConfig(obj: T) {
    if (obj) {
      this.mergedConfiguration = <T>merge(this.mergedConfiguration, obj);
    }
  }

  public getConfig() {
    return this.mergedConfiguration;
  }
}
