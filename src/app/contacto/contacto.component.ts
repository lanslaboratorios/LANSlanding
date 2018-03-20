import { Component, OnInit, HostListener } from '@angular/core';
declare var google: any, $: any;

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent {

  isHover: Boolean;
  lat: any= 19.2950623;
  lng: any= -99.15120350000001;
  zm: any= 15;

  constructor( ) { }
  activo(flag: Boolean): void {
    this.isHover = flag;
  }
}
