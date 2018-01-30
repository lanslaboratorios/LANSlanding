import { Component, OnInit, HostListener } from '@angular/core';
declare var $:any;

@Component({
  selector: 'nosotros',
  templateUrl: './nosotros.component.html',
  styleUrls: ['./nosotros.component.css']
})
export class NosotrosComponent implements OnInit {

  constructor( ) {

   }

   @HostListener('window:scroll', ['$event']) onScrollEvent($event){
    var speed = 150;
    var s = $(document).scrollTop();
    console.log(s);

    
    if(s > 500){
      console.log("MAYOR");
      $('#titulo').fadeIn(speed);
    }

    if(s > 700){
      $('#parImg').fadeIn(speed);
    }

    if(s > 800){
      $('#logos').fadeIn(speed);
    }    
  } 

  ngOnInit() {


  $('#titulo').hide();
  $('#parImg').hide();
  $('#logos').hide();

  }



}
