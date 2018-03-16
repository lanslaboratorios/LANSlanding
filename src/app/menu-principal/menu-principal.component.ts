import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-menu-principal',
  templateUrl: './menu-principal.component.html',
  styleUrls: ['./menu-principal.component.css']
})
export class MenuPrincipalComponent implements OnInit {

  constructor() { }

  ngOnInit(){
    $('.scrollspy').scrollSpy();
  }

}
