import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  constructor() {

  }

  ngOnInit() {
    $('.carousel.carousel-slider').carousel({fullWidth: true});
    $('.parallax').parallax();
  }

}