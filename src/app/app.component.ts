import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent implements OnInit {
  title = 'app';

  small = false;

  constructor( ) {}

  ngOnInit() {
    if ( document.documentElement.clientWidth < 650) {
      this.small = true;
    }else {
      this.small = false;
    }

    this.toggleSlider();
  }

  toggleSlider = function():void{
    $(document).ready(function(){
      var x  = $(window).width(); 
      if( x < 1063){
        $('#appSlider').hide();
        
      }else{
        $('#appSlider').show();
       
      }
    });

    $(window).resize(function(){
      var x  = $(window).width(); 
      if( x < 1063){
        $('#appSlider').hide();
        
      }else{
        $('#appSlider').show();
        
      }
    });
  }


}
