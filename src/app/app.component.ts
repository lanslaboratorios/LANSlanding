import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';

  small=false;

  ngOnInit() {
    if( document.documentElement.clientWidth < 650){
      this.small=true;
    }else{
      this.small=false;
    }
  }

}
