import { Component, OnInit } from '@angular/core';
declare var $:any;

@Component({
  selector: 'razones',
  templateUrl: './razones.component.html',
  styleUrls: ['./razones.component.css']
})
export class RazonesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('.carousel').carousel({padding:300});
  }

}
