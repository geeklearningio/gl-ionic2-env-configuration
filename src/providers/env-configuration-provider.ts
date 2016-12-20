import { Injectable } from '@angular/core';

var _merge = require('lodash/merge');

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
      this.mergedConfiguration = <T>_merge(this.mergedConfiguration, obj);
    }
  }

  public getConfig() {
    return this.mergedConfiguration;
  }
}
