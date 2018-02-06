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
  small:boolean;

  constructor() {

  }

  @HostListener('window:scroll', ['$event']) onScrollEvent($event){
    var speed = 450;
    this.s = $(document).scrollTop();
    if(this.s<533){
      $(".tooltip").css("background-color","#000000ce").css("color","white");
    }else{
      $(".tooltip").css("background-color","#00d8c6c0").css("color","#0075c9");
    }
  } 


  ngOnInit() {
    this.s = $(document).scrollTop();
    if( document.documentElement.clientWidth < 992){
      this.small=true;
    }else{
      this.small=false;
    }

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

  show(id:string):void{
    $(`#${id}+p`).fadeIn(500,"swing")
  }

  hide(id:string):void{
    $(`#${id}+p`).css("display","none");
  }
}
