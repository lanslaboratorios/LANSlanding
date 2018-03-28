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
    {'imagen': '../assets/socios/apoyo.png', 'texto': 'Respaldo en campañas y proyectos especiales'},
    {'imagen': '../assets/socios/ate.png', 'texto': 'Asesoría técnica y clínica'},
    {'imagen': '../assets/socios/socios.png', 'texto': 'Especialista en Desarrollo de Socios'},
    {'imagen': '../assets/socios/integracion.png', 'texto': 'Reporte de resultados personalizados'},
    {'imagen': '../assets/socios/reporte.png', 'texto': 'Diseño de perfiles a la medida'}];
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
