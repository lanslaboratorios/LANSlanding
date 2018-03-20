import { Component, OnInit, HostListener } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-nosotros',
  templateUrl: './nosotros.component.html',
  styleUrls: ['./nosotros.component.css']
})
export class NosotrosComponent implements OnInit {

  invisible = false;
  constructor() {

   }

   @HostListener('window:scroll', ['$event']) onScrollEvent($event) {
    const speed = 400;
    const s = $(document).scrollTop();
    // console.log(s); // Impresion del scroll
    // console.log(this.invisible); //impresion del elemento invisible

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

  ngOnInit() {
  }

}
