import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuNavegacionComponent } from './menu-navegacion/menu-navegacion.component';
import { SliderComponent } from './slider/slider.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { LansFooterComponent } from './lans-footer/lans-footer.component';
import { RazonesComponent } from './razones/razones.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { CalidadComponent } from './calidad/calidad.component';
import { SociosComponent } from './socios/socios.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuNavegacionComponent,
    SliderComponent,
    NosotrosComponent,
    LansFooterComponent,
    RazonesComponent,
    ServiciosComponent,
    CalidadComponent,
    SociosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
