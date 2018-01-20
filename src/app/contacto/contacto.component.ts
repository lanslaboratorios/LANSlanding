import { Component, OnInit } from '@angular/core';
declare var google:any;

@Component({
  selector: 'contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {
 
  isHover:Boolean;
  lat:any=19.2950623;
  lng:any=-99.15120350000001;
  zm:any=15;

  constructor() { }

  ngOnInit() {
    
  }
  activo(flag:Boolean):void{
     
    this.isHover=flag;
    
  }
}
