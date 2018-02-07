import { Component, OnInit, HostListener } from '@angular/core';
declare var $:any;

@Component({
  selector: 'nosotros',
  templateUrl: './nosotros.component.html',
  styleUrls: ['./nosotros.component.css']
})
export class NosotrosComponent implements OnInit {

  invisible:boolean=false;
  constructor( ) {

   }

   @HostListener('window:scroll', ['$event']) onScrollEvent($event){
    var speed = 400;
    var s = $(document).scrollTop();
    
    console.log(this.invisible);

    if(s>130 && s<189 && !(this.invisible)){
      this.invisible=true;
      $('#titulo').hide();
      $('#parImg').hide();
      $('#logos').hide();
    }

    if(s > 189){
      console.log("MAYOR");
      $('#titulo').fadeIn(speed);
    }

    if(s > 500){
      $('#parImg').fadeIn(speed);
    }

    if(s > 890){
      $('#logos').fadeIn(speed);
    }    
  } 

  ngOnInit() {

  }



}
