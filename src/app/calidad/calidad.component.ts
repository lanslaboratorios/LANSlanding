import { Component, OnInit, HostListener } from '@angular/core';
import {DataShareService } from '../data-share.service';

declare var  $: any;

@Component({
  selector: 'app-calidad',
  templateUrl: './calidad.component.html',
  styleUrls: ['./calidad.component.css']
})
export class CalidadComponent implements OnInit {

  constructor(private dataShare: DataShareService) { }
  @HostListener('window:load', ['$event']) onPageLoad($event) {
    this.dataShare.updatePos('calidad', $('#anclaCalidad').offset().top);
  }

  @HostListener('window:resize', ['$event']) onPageResize($event) {
    this.dataShare.updatePos('calidad', $('#anclaCalidad').offset().top);
  }
  ngOnInit() {
    $('.modal').modal();
  }

}
