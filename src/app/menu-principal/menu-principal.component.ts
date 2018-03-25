import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-menu-principal',
  templateUrl: './menu-principal.component.html',
  styleUrls: ['./menu-principal.component.css']
})
export class MenuPrincipalComponent implements OnInit {

  constructor() { }

  ngOnInit(){
    $('.scrollspy').scrollSpy();

    $('#menuAftScroll').hide();

    this.scanScroll();

  }

  
  scanScroll = function():void{
    $(document).scroll(function(){
      var y = $(window).scrollTop();

      if(y > 200){
        $('#menuBefScroll').fadeOut();
        $('#menuAftScroll').slideDown('fast');
      }else{
        $('#menuBefScroll').fadeIn();
        $('#menuAftScroll').slideUp('fast');
      }
    }); 
  }

  aparecerMenu = function():void {
    $('#menuLateral').fadeIn();
  }

  desapareceMenu = function():void{
    $('#menuLateral').fadeOut();
  }

}
