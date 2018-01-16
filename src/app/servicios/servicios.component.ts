import { Component, OnInit } from '@angular/core';
import { logWarnings } from 'protractor/built/driverProviders';
declare var $: any;

@Component({
  selector: 'servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css']
})
export class ServiciosComponent implements OnInit {

  areas:String[] = new Array; //arreglo para poner las áreas, no se inicializa con ellas por si en un futuro se requiere obtenerlas por ajax
  selectedArea:any;
  isHover:Boolean;
  
  constructor() { }

  ngOnInit() {
    this.areas=['Endocrinología y Metabolismo', 'Biología Molecular', 'Química Clínica General',
                'Oncología','Parasitología','Patología','Toxicología y Monitoreo de Fármacos',
                'Neonatología','Hematología','Uroanálisis','Bacteriología','Inmunología e Inmunoquímica']
  }

  selected(item:any):void{
    this.selectedArea=item;
    console.log(this.selectedArea)
  }

  hover(flag:Boolean):void{
     this.isHover=flag;
     console.log(this.isHover)
  }

}
