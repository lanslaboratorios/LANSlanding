import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { tap } from 'rxjs/operators';

@Injectable()
export class DbconnectService {

  peticion;
  reader = new FileReader;
  constructor( private http: HttpClient) { }
  getTextFile(filename: string) {
    // The Observable returned by get() is of type Observable<string>
    // because a text response was specified.
    // There's no need to pass a <string> type parameter to get().
  this.peticion = new Request(filename);
  fetch(this.peticion)
    .then(res => res.blob())
    .then(text => this.reader.readAsText(text, 'ISO-8859-9'));
    return this.reader;
  }

}
