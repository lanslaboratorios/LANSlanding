//import { Component, OnInit } from '@angular/core';
import { Component, Input, OnInit, AfterViewChecked, HostListener } from '@angular/core';
declare var $: any;

@Component({
  selector: 'menu-navegacion',
  templateUrl: './menu-navegacion.component.html',
  styleUrls: ['./menu-navegacion.component.css']
})



export class MenuNavegacionComponent implements OnInit {

  s:number=0;

  constructor() {

  }

  @HostListener('window:scroll', ['$event']) onScrollEvent($event){
    var speed = 150;
    this.s = $(document).scrollTop();    
  } 


  ngOnInit() {
    $(".button-collapse").sideNav({'onOpen':function(){
      $("#sidenav-overlay").css("z-index","unset");
      $("#log").css("display","none");
    },
    'onClose':function(){
      $("#log").css("display","inline-flex");
    }
    });
    $("#buscadorMenu").hide();
    $("#opcionesMenu").show();
   
  }



  apareceBuscador():void{
    $("#buscadorMenu").slideToggle();
    $("#opcionesMenu").slideToggle();
  }


}
