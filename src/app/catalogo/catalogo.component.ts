import { Component, OnInit } from '@angular/core';
import { DbconnectService } from '../dbconnect.service';


@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {

  constructor( private connection: DbconnectService) { }
  doc = [];
  rows = [];
  heads = [];
  parseTxt( texto) {
    this.doc = texto.split('\n');
    this.heads = this.doc[0].split('\t');
    for (let i = 1; i < this.doc.length - 1; i++ ) {
       this.rows.push(this.doc[i].split('\t'));
      }
  }

  ngOnInit() {
    const datos = this.connection.getTextFile('assets/Catalogo/Catalogo_.txt');
    datos.onload = (e) => {// console.log(datos.result);
    this.parseTxt(datos.result);
    };
  }

}
