import { Component, OnInit } from '@angular/core';
import { DbconnectService } from '../dbconnect.service';


@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {

  constructor( private connection: DbconnectService) { }

  parseTxt( texto) {
    const rows = texto.split('\n');
    //for(){}
  }

  ngOnInit() {
    const datos = this.connection.getTextFile('assets/Catalogo/Catalogo_.txt');
    datos.onload = (e) => {// console.log(datos.result);
    this.parseTxt(datos.result);
    };
  }

}
