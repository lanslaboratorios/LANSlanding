import { Component, Input, OnInit, HostListener } from '@angular/core';
import { DataShareService } from '../data-share.service';
declare var $: any;

@Component({
  selector: 'app-menu-navegacion',
  templateUrl: './menu-navegacion.component.html',
  styleUrls: ['./menu-navegacion.component.css']
})



export class MenuNavegacionComponent implements OnInit {

  s = 0;
  small: boolean;
  posiciones;

  constructor(private dataShare: DataShareService) {

  }

  @HostListener('window:scroll', ['$event']) onScrollEvent($event) {
    const speed = 450;
    this.s = $(document).scrollTop();
    if (this.s < 533) {
      $( '.tooltip' ).css('background-color', '#000000ce').css('color', 'white');
    }else {
      $('.tooltip').css('background-color', '#00d8c6c0').css('color', '#0075c9');
    }
  }


  ngOnInit() {
    this.s = $(document).scrollTop();
    this.dataShare.posiciones$.subscribe( x => this.posiciones = x);
    console.log(this.posiciones);
    if ( document.documentElement.clientWidth < 992) {
      this.small = true;
    }else {
      this.small = false;
    }

    $('.button-collapse').sideNav({'onOpen': function() {
      $('#sidenav-overlay').css('z-index', 'unset');
      $('#log').css('display', 'none');
    },
    'onClose': function(){
      $('#log').css('display', 'inline-flex');
    }
    });
    $('#buscadorMenu').hide();
    $('#opcionesMenu').show();
  }



  apareceBuscador(): void {
    $('#buscadorMenu').slideToggle();
    $('#opcionesMenu').slideToggle();
  }

  show(id: string): void {
    $(`#${id}+p`).fadeIn(500, 'swing');
  }

  hide(id: string): void {
    $(`#${id}+p`).css('display', 'none');
  }
}
