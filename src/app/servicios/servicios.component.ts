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
  hoveredArea:any;
  isHover:Boolean;
  Card:any;
  
  constructor() { }

  ngOnInit() {
    this.areas=['Endocrinología y Metabolismo', 'Biología Molecular', 'Química Clínica General',
                'Oncología','Parasitología','Patología','Toxicología y Monitoreo de Fármacos',
                'Neonatología','Hematología','Uroanálisis','Bacteriología','Inmunología e Inmunoquímica'];
    this.Card={'img':'../../assets/servicios/lans_biologia_molecular.png','area':'Biología Molecular','contenido':'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et tristique dolor, eget commodo velit. Donec eget aliquet nisi. Proin eu metus et enim semper elementum auctor at augue. Curabitur id egestas mi.Lorem ipsum dolor sit amet, consectetur adipiscing elit.'};
  }

  //Funcion para colorear selecciónado
  selected(item:any):void{
    this.selectedArea=item;
    console.log(this.selectedArea)
    this.Card.area=item;
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
