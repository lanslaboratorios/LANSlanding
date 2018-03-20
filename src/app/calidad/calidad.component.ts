import { Component, OnInit, HostListener } from '@angular/core';

declare var  $: any;

@Component({
  selector: 'app-calidad',
  templateUrl: './calidad.component.html',
  styleUrls: ['./calidad.component.css']
})
export class CalidadComponent implements OnInit {

  constructor() { }
  ngOnInit() {
    $('.modal').modal();
  }

}
