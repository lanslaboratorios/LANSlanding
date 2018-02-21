import { Component, OnInit, HostListener } from '@angular/core';
import { DataShareService } from '../data-share.service';
declare var $: any;

@Component({
  selector: 'app-sistema-small',
  templateUrl: './sistema-small.component.html',
  styleUrls: ['./sistema-small.component.css']
})
export class SistemaSmallComponent implements OnInit {

  constructor(private dataShare: DataShareService) { }

  ngOnInit() {
  }

  @HostListener('window:load', ['$event']) onPageLoad($event) {
    this.dataShare.updatePos('sistema', $('#anclaSistema').offset().top);
  }

  @HostListener('window:resize', ['$event']) onPageResize($event) {
    this.dataShare.updatePos('sistema', $('#anclaSistema').offset().top);
  }
}
