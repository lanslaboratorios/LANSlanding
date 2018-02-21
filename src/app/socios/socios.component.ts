import { Component, OnInit, HostListener } from '@angular/core';
import { DataShareService } from '../data-share.service';
declare var $: any;

@Component({
  selector: 'app-socios',
  templateUrl: './socios.component.html',
  styleUrls: ['./socios.component.css']
})
export class SociosComponent implements OnInit {

  beneficios: any[];
  socios: any[];
  hoveredArea: any;
  isHover: Boolean;


  constructor( private dataShare: DataShareService) { }

  @HostListener('window:load', ['$event']) onPageLoad($event) {
    this.dataShare.updatePos('socios', $('#anclaSocios').offset().top);
  }

  @HostListener('window:resize', ['$event']) onPageResize($event) {
    this.dataShare.updatePos('socios', $('#anclaSocios').offset().top);
  }

  ngOnInit() {
    this.beneficios = [{'imagen': '../assets/socios/moduloweb.png', 'texto': 'MÓDULO WEB PARA CAPTURA DE ÓRDENES'},
    {'imagen': '../assets/socios/apoyo.png', 'texto': 'APOYO EN CAMPAÑAS (PRECIOS ESPECIALES)'},
    {'imagen': '../assets/socios/credito.png', 'texto': 'CRÉDITO'},
    {'imagen': '../assets/socios/descuento.png', 'texto': 'DESCUENTOS EN ESTUDIOS DE LABORATORIO PARA SU PERSONAL'},
    {'imagen': '../assets/socios/integracion.png', 'texto': 'INTEGRACIÓN DE SISTEMA DE LABORATORIO'},
    {'imagen': '../assets/socios/reporte.png', 'texto': 'REPORTE DE RESULTADOS PERSONALIZADO'}];
  }
  // Función para colorear on hover
  activo(item: any, flag: Boolean): void {
    this.hoveredArea = item;
    this.isHover = flag;
    if (!this.isHover) {
      this.hoveredArea = '';
    }
  }
}
