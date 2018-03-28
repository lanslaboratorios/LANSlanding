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
    $('#logoChico').hide();
    $('#menuLateral').hide();
    $('#btnCaptura_txt').hide();
    $('#btnResult_txt').hide();
    $('#btnCaptura_txt_grande').hide();
    $('#btnResult_txt_grande').hide();

    $('#btnCaptura_img').hide();
    $('#btnResult_img').hide();

    $('#menuBefCompleto').hide();

    
    
    

    if($(window).width() < 1163){
      $('#menuBefScroll').hide();
      $('#menuAftScroll').show();
      $('#logoChico').show();
    }

    

    this.scanScroll();
    this.scanResize();
    this.activarTxt('#btnCaptura_img','#btnCaptura_txt');
    this.activarTxt('#btnResult_img','#btnResult_txt');
    this.activarTxt('#btnCaptura_img_grande','#btnCaptura_txt_grande');
    this.activarTxt('#btnResult_img_grande','#btnResult_txt_grande');



  } // ngOnInit() END


  // === Metodos ===

  scanScroll = function():void{
    $(document).scroll(function(){
      var y = $(window).scrollTop();

      if(y > 200){
        // Aparece Menu chico
        $('#menuBefScroll').fadeOut();
        $('#menuAftScroll').slideDown('fast');
        $('#logoChico').fadeIn('fast');

        
      }else if(y < 200 && $(window).width() > 1063){
        // Aparece Menu Grande
        $('#menuBefScroll').fadeIn();
        $('#menuAftScroll').slideUp('fast');
        $('#logoChico').fadeOut('fast');     
      }

      if(y > 200 && $(window).width() > 1063){
        $('#btnCaptura_img').show();
        $('#btnResult_img').show();
      }else{
        $('#btnCaptura_img').hide();
        $('#btnResult_img').hide();
      }


    }); 
  }

  scanResize = function():void{
    $(window).resize(function(){
      var x = $(window).width();

      if(x < 1163){
        // Aparece Menu chico
        $('#menuBefScroll').fadeOut();
        $('#menuAftScroll').slideDown('fast');
        $('#logoChico').fadeIn('fast');

        
      }else if(x > 1163 && $(window).scrollTop() < 200){
        // Aparece Menu grande
        $('#menuBefScroll').fadeIn();
        $('#menuAftScroll').slideUp('fast');
        $('#logoChico').fadeOut('fast');
      }

      if(x > 1063 && $(window).scrollTop() > 200){
        $('#btnCaptura_img').show();
        $('#btnResult_img').show();
      }else{
        $('#btnCaptura_img').hide();
        $('#btnResult_img').hide();
      }

    })
  }


  aparecerMenu = function():void {
    $('#menuLateral').fadeIn();
  }

  desapareceMenu = function():void{
    $('#menuLateral').fadeOut();
  }

  activarTxt= function(elemento:string,aparece:string):void{
    $(elemento).mouseenter(function(){
      $(aparece).fadeIn('fast');
    });
    $(elemento).mouseleave(function(){
      $(aparece).fadeOut('fast');
    });

  }

  activarMenuGrande = function():void{
    $('#menuBefCompleto').show();
  }

  desactivarMenuGrande = function():void{
    $('#menuBefCompleto').hide();
  }

}
