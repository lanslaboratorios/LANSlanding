import { Component, OnInit, HostListener } from '@angular/core';
import { DataShareService } from '../data-share.service';
declare var $: any;

@Component({
  selector: 'app-sistema',
  templateUrl: './sistema.component.html',
  styleUrls: ['./sistema.component.css']
})
export class SistemaComponent implements OnInit {

  constructor( private dataShare: DataShareService) { }
ngOnInit() {
}

@HostListener('window:load', ['$event']) onPageLoad($event) {
  this.dataShare.updatePos('sistema', $('#anclaSistema').offset().top);
}

@HostListener('window:resize', ['$event']) onPageResize($event) {
  this.dataShare.updatePos('sistema', $('#anclaSistema').offset().top);
}
}
