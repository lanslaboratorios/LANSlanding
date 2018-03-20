import { Component, OnInit, HostListener } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-sistema',
  templateUrl: './sistema.component.html',
  styleUrls: ['./sistema.component.css']
})
export class SistemaComponent implements OnInit {

  small: Boolean;
  constructor( ) { }
ngOnInit() {
  if ( document.documentElement.clientWidth < 650) {
    this.small = true;
  }else {
    this.small = false;
  }
}



@HostListener('window:resize', ['$event']) onPageResize($event) {
  if ( document.documentElement.clientWidth < 650) {
    this.small = true;
  }else {
    this.small = false;
  }
}
}
