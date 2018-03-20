import { Component, OnInit, HostListener } from '@angular/core';

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


  constructor() { }

  ngOnInit() {
    this.beneficios = [{'imagen': '../assets/socios/moduloweb.png', 'texto': 'Portal para captura de órdenes y consulta de resultados'},
    {'imagen': '../assets/socios/apoyo.png', 'texto': 'Apoyo en campañas y proyectos especiales'},
    {'imagen': '../assets/socios/credito.png', 'texto': 'Desarrollo de socios'},
    {'imagen': '../assets/socios/descuento.png', 'texto': 'Mesa de atención a socios'},
    {'imagen': '../assets/socios/integracion.png', 'texto': 'Diseño de Soluciones personalizadas'},
    {'imagen': '../assets/socios/reporte.png', 'texto': 'Asesoría clínica y técnica'}];
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
