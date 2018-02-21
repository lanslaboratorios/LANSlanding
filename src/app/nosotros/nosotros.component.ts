import { Component, OnInit, HostListener } from '@angular/core';
import { DataShareService } from '../data-share.service';
declare var $: any;

@Component({
  selector: 'app-nosotros',
  templateUrl: './nosotros.component.html',
  styleUrls: ['./nosotros.component.css']
})
export class NosotrosComponent implements OnInit {

  invisible = false;
  constructor( private dataShare: DataShareService) {

   }

   @HostListener('window:scroll', ['$event']) onScrollEvent($event) {
    const speed = 400;
    const s = $(document).scrollTop();
    console.log(s);
    console.log(this.invisible);

    if (s > 130 && s < 189 && !(this.invisible)) {
      this.invisible = true;
      $('#titulo').hide();
      $('#parImg').hide();
      $('#logos').hide();
    }

    if (s > 189) {
      $('#titulo').fadeIn(speed);
    }

    if (s > 500) {
      $('#parImg').fadeIn(speed);
    }

    if (s > 890) {
      $('#logos').fadeIn(speed);
    }
  }

  @HostListener('window:load', ['$event']) onPageLoad($event) {
    this.dataShare.updatePos('nosotros', $('#anclaNosotros').offset().top);
  }

  @HostListener('window:resize', ['$event']) onPageResize($event) {
    this.dataShare.updatePos('nosotros', $('#anclaNosotros').offset().top);
  }

  ngOnInit() {
  }

}
