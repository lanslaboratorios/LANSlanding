import { Component, OnInit, HostListener } from '@angular/core';
import { logWarnings } from 'protractor/built/driverProviders';
import { DataShareService } from '../data-share.service';
declare var $: any;

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css']
})
export class ServiciosComponent implements OnInit {

areas: String[] = new Array; // arreglo para poner las áreas, no se inicializa con ellas por si en un futuro se requiere obtenerlas por ajax
selectedArea: any;
hoveredArea: any;
isHover: Boolean;
Card: any;

  constructor( private dataShare: DataShareService) { }

  ngOnInit() {
    this.areas = ['Endocrinología y Metabolismo', 'Biología Molecular', 'Química Clínica General',
                'Oncología', 'Parasitología', 'Patología', 'Toxicología y Monitoreo de Fármacos',
                'Neonatología', 'Hematología', 'Uroanálisis', 'Bacteriología', 'Inmunología e Inmunoquímica'];
    this.Card = {
      'Endocrinología y Metabolismo': {'img': '../../assets/servicios/lans_biologia_molecular.png',
      'contenido': 'ansclknsclnacknaslkcnakcnlkancs'},
      'Biología Molecular': {'img': '../../assets/servicios/lans_biologia_molecular.png',
      'contenido': 'ansclknsclnacknaslkcnakcnlkancs'},
      'Química Clínica General': {'img': '../../assets/servicios/lans_biologia_molecular.png',
      'contenido': 'ansclknsclnacknaslkcnakcnlkancs'},
      'Oncología': {'img': '../../assets/servicios/lans_biologia_molecular.png',
      'contenido': 'ansclknsclnacknaslkcnakcnlkancs'},
      'Parasitología': {'img': '../../assets/servicios/lans_biologia_molecular.png',
      'contenido': 'ansclknsclnacknaslkcnakcnlkancs'},
      'Patología': {'img': '../../assets/servicios/lans_biologia_molecular.png',
      'contenido': 'ansclknsclnacknaslkcnakcnlkancs'},
      'Toxicología y Monitoreo de Fármacos': {'img': '../../assets/servicios/lans_biologia_molecular.png',
      'contenido': 'ansclknsclnacknaslkcnakcnlkancs'},
      'Neonatología': {'img': '../../assets/servicios/lans_biologia_molecular.png',
      'contenido': 'ansclknsclnacknaslkcnakcnlkancs'},
      'Hematología': {'img': '../../assets/servicios/lans_biologia_molecular.png',
      'contenido': 'ansclknsclnacknaslkcnakcnlkancs'},
      'Uroanálisis': {'img': '../../assets/servicios/lans_biologia_molecular.png',
      'contenido': 'ansclknsclnacknaslkcnakcnlkancs'},
      'Bacteriología': {'img': '../../assets/servicios/lans_biologia_molecular.png',
      'contenido': 'ansclknsclnacknaslkcnakcnlkancs'},
      'Inmunología e Inmunoquímica': {'img': '../../assets/servicios/lans_biologia_molecular.png',
      'contenido': 'ansclknsclnacknaslkcnakcnlkancs'}
    };
    this.areas.sort();
    this.selectedArea = this.areas[0];
  }

  @HostListener('window:load', ['$event']) onPageLoad($event) {
    this.dataShare.updatePos('servicios', $('#anclaServicios').offset().top);
  }

  @HostListener('window:resize', ['$event']) onPageResize($event) {
    this.dataShare.updatePos('servicios', $('#anclaServicios').offset().top);
  }

  // Funcion para colorear selecciónado
  selected(item: any): void {
    this.selectedArea = item;
    this.Card.area = item;
  }

  // Función para colorear on hover
  activo(item: any, flag: Boolean): void {
    this.hoveredArea = item;
    this.isHover = flag;
    if (!this.isHover) {
      this.hoveredArea = '';
    }
  }

  sortBy(x: number): void {
    switch (x) {
      case 0: this.areas.sort();
              break;
      case 1: console.log('Ordenar por precio');
              break;
      default: return;
    }
  }

}
