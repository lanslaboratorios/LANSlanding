import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class DataShareService {

  pos = {nosotros: 620, servicios: 1947, calidad: 2887, socios: 3917, sistema: 5487, contacto: 7047};

  private posiciones =  new BehaviorSubject<any>(this.pos);
  posiciones$= this.posiciones.asObservable();
  constructor() { }
  updatePos(key, value) {
    console.log(`key ${key} ----- value ${value}`);
    this.pos[key] = value - 100;
    this.posiciones.next(this.pos);
  }

}
