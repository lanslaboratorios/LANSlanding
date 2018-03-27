import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SliderComponent } from './slider/slider.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { LansFooterComponent } from './lans-footer/lans-footer.component';
import { RazonesComponent } from './razones/razones.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { CalidadComponent } from './calidad/calidad.component';
import { SociosComponent } from './socios/socios.component';
import { ContactoComponent } from './contacto/contacto.component';
import { SistemaComponent } from './sistema/sistema.component';
import { NgxCarouselModule } from 'ngx-carousel';
import 'hammerjs';
import { MenuPrincipalComponent } from './menu-principal/menu-principal.component';
import { MainComponent } from './main/main.component';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { HttpClientModule } from '@angular/common/http';
import { DbconnectService } from './dbconnect.service';

@NgModule({
  declarations: [
    AppComponent,
    SliderComponent,
    NosotrosComponent,
    LansFooterComponent,
    RazonesComponent,
    ServiciosComponent,
    CalidadComponent,
    SociosComponent,
    ContactoComponent,
    SistemaComponent,
    MenuPrincipalComponent,
    MainComponent,
    CatalogoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBXrbsJBEde5VN5hMepzwvp_SLE288VhPo'
    }),
    NgxCarouselModule,
    ScrollToModule.forRoot()

  ],
  providers: [DbconnectService],
  bootstrap: [AppComponent]
})
export class AppModule { }
