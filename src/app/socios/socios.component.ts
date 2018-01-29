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
  hoveredArea:any;
  isHover:Boolean;


  constructor() { }

  ngOnInit() {
    this.beneficios=[{'imagen':'../assets/socios/moduloweb.png', 'texto':'MÓDULO WEB PARA CAPTURA DE ÓRDENES'},
    {'imagen':'../assets/socios/apoyo.png', 'texto':'APOYO EN CAMPAÑAS (PRECIOS ESPECIALES)'},
    {'imagen':'../assets/socios/credito.png', 'texto':'CRÉDITO'},
    {'imagen':'../assets/socios/descuento.png', 'texto':'DESCUENTOS EN ESTUDIOS DE LABORATORIO PARA SU PERSONAL'},
    {'imagen':'../assets/socios/integracion.png', 'texto':'INTEGRACIÓN DE SISTEMA DE LABORATORIO'},
    {'imagen':'../assets/socios/reporte.png', 'texto':'REPORTE DE RESULTADOS PERSONALIZADO'}];
  }
 
  //Función para colorear on hover
  activo(item:any,flag:Boolean):void{
    this.hoveredArea=item; 
    this.isHover=flag;
    if(!this.isHover){
      this.hoveredArea="";
    }
  }

}
