//import { Component, OnInit } from '@angular/core';
import { Component, Input, OnInit, AfterViewChecked } from '@angular/core';
declare var $: any;

@Component({
  selector: 'menu-navegacion',
  templateUrl: './menu-navegacion.component.html',
  styleUrls: ['./menu-navegacion.component.css']
})



export class MenuNavegacionComponent implements OnInit {


  constructor() {

  }



  ngOnInit() {
    $(".button-collapse").sideNav();
    $("#buscadorMenu").hide();
    $("#opcionesMenu").show();
  }



  apareceBuscador():void{
    $("#buscadorMenu").slideToggle();
    $("#opcionesMenu").slideToggle();
  }


}
