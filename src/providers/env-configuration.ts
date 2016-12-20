import { Injectable } from '@angular/core';

@Injectable()
export class EnvConfiguration {

  private merrgedConfiguration: any = {};

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
            (<any>window).configuration = JSON.parse(xobj.responseText);
            this.merrgedConfiguration = (<any>window).configuration;
            resolve(true);
          } else {
            console.log('could not load environment configuration file');
            resolve(false);
          }
        }
      };
      xobj.send(null);
    });
  }

  getConfig() {
    return this.merrgedConfiguration;
  }
}
