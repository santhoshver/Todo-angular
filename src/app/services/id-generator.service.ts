import { Injectable } from '@angular/core';

@Injectable()
export class IdGeneratorService {

  constructor() { }

  random4Digits = function(){
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  };

  /* Generates a new GUID */
  newId(){
    return this.random4Digits() + this.random4Digits() + '-' + this.random4Digits() + '-' + this.random4Digits() + '-' +
      this.random4Digits() + '-' + this.random4Digits() + this.random4Digits() + this.random4Digits();
  }

}
