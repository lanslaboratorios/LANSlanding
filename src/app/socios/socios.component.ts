import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'socios',
  templateUrl: './socios.component.html',
  styleUrls: ['./socios.component.css']
})
export class SociosComponent implements OnInit {

  beneficios:any[];
  socios:any[];

  constructor() { }

  ngOnInit() {
    //$('#carr').carousel({fullWidth: true});
    this.beneficios=[{'imagen':'../assets/socios/moduloweb.png', 'texto':'MÓDULO WEB PARA CAPTURA DE ÓRDENES'},
    {'imagen':'../assets/socios/apoyo.png', 'texto':'APOYO EN CAMPAÑAS (PRECIOS ESPECIALES)'},
    {'imagen':'../assets/socios/credito.png', 'texto':'CRÉDITO'},
    {'imagen':'../assets/socios/descuento.png', 'texto':'DESCUENTOS EN ESTUDIOS DE LABORATORIO PARA SU PERSONAL'},
    {'imagen':'../assets/socios/integracion.png', 'texto':'INTEGRACIÓN DE SISTEMA DE LABORATORIO'},
    {'imagen':'../assets/socios/reporte.png', 'texto':'REPORTE DE RESULTADOS PERSONALIZADO'}];
  }

  anterior():void{
    $('#scar').carousel('next',1);
  }
  siguiente():void{
    $('#scar').carousel('prev',1);
  }

}
