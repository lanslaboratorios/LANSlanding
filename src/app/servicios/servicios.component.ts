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
area: any;

  constructor( private dataShare: DataShareService) { }

  ngOnInit() {
    this.areas = [ 'Biología Molecular', 'Química Clínica', 'Microbiología', 'Patología', 'Toxicología',
                'Neonatología', 'Hematología', 'Inmunología', 'Inmunoquímica'];
    this.Card = {
      'Química Clínica': {'bg': '../../assets/servicios/lans_biologia_molecular.png',
      'img': '../../assets/servicios/lans_biologia_molecular.png',
      'parrafoPrincipal': 'Química Clínica es una de las áreas principales del laboratorio.' +
      'Se procesan estudios de rutina y especiales los cuales son de gran ayuda para el médico,' +
      ' ya que con esto puede proporcionarle al paciente un buen diagnóstico, seguimiento y control de tratamiento,'+
      ' así como también le es de utilidad para la prevención y la investigación de enfermedades.' +
      ' En el laboratorio clínico se realizan diversos estudios, entre los cuales tenemos: perfil de lípidos,' +
      ' perfil cardiaco, perfil renal, enzimas cardiacas, drogas de abuso, inmunoproteínas, etc.',
      'parrafo2': 'Para que un resultado sea confiable las muestras deben ser de calidad y ' +
      'debe de cumplirse con un proceso de control de calidad interno, esto es, se debe de cumplir' +
      ' con las fases pre-analítica, analítica y post-analítica. ',
      'parrafo3': 'El área de Química Clínica cuenta con personal altamente capacitado y con ' +
      'la experiencia suficiente para realizar las actividades correspondientes. En el área se ' +
      'cuenta también con dos instrumentos de medición directa de alta tecnología. Se utilizan ' +
      'reactivos que previamente han pasado por un control de calidad interno.',
    },
      'Biología Molecular': {'bg': '../../assets/servicios/lans_biologia_molecular.png',
      'img': '',
      'parrafoPrincipal':  'En la actualidad, el diagnóstico molecular se ha ' +
      'enfocado principalmente en el diagnóstico de enfermedades infecciosas (50-60%), sin embargo, ' +
      'existe un aumento progresivo de técnicas moleculares en el área de cáncer y enfermedades ' +
      'genéticas, convirtiendo al diagnóstico molecular en una de las áreas de mayor ' +
      'dinamismo y crecimiento, revolucionando las estrategias para el tratamiento de diversas ' +
      'patologías y condiciones de salud, ofreciendo técnicas con altos estándares de calidad que ' +
      'entregan al equipo clínico información crítica para el cuidado de los pacientes.',
      'parrafo2': 'Las enfermedades infecciosas se han transformado en la “punta de lanza” para el ' +
      'desarrollo de test de diagnóstico molecular, siendo más del 50 % de las técnicas disponibles hoy en día.',
      'parrafo3': 'El área de biología molecular cuenta con un amplificador de la más alta tecnología ' +
      'y que apoya en el seguimiento y diagnóstico de enfermedades infeccionas como carga viral de ' +
      'CMV, HIV, HCV, Mycobacterium tuberculosis, Chlamydia trachomatis, Neisseria gonorrheae y detección de VPH de alto riesgo.',
    },
      'Microbiología': {'bg': '../../assets/servicios/lans_biologia_molecular.png',
      'img': '',
      'parrafoPrincipal':  '',
      'parrafo2': '',
      'parrafo3': '',
    },
      'Patología': {'bg': '../../assets/servicios/lans_biologia_molecular.png',
      'img': '',
      'parrafoPrincipal': '',
      'parrafo2': '',
      'parrafo3': '',
    },
      'Toxicología': {'bg': '../../assets/servicios/lans_biologia_molecular.png',
      'img': '',
      'parrafoPrincipal': '',
      'parrafo2': '',
      'parrafo3': '',
    },
      'Neonatología': {'bg': '../../assets/servicios/lans_biologia_molecular.png',
      'img': '',
      'parrafoPrincipal': 'El Tamiz Neonatal consiste en una serie de pruebas de laboratorio que se ' +
      'realizan a partir de una muestra sanguínea tomada del talón del pie del recién nacido o del ' +
      'cordón umbilical, con el objeto de descubrir y tratar oportunamente enfermedades genéticas ' +
      'graves e irreversibles que no se detectan en el nacimiento, ni siquiera con una revisión ' +
      'médica muy cuidadosa.',
      'parrafo2': 'Algunos ejemplos de las enfermedades que pueden ser detectadas son: hipotiroidismo ' +
      'congénito, fibrosis quística, hiperplasia adrenal congénita, galactosemia, aminoacidopatías ' +
      '(fenilcetonuria (PKU), tirosinemia hereditaria, enfermedad de jarabe de maple, etc.), ' +
      'acidemias orgánicas, transtornos en la oxidación de ácidos grasos, hemoglobinopatías (hemoglobinas anormales) y muchas más.',
      'parrafo3': 'En LANS laboratorios nos preocupamos por brindar la mayor atención y la mejor ' +
      'calidad a todos nuestros pacientes y es por ello que contamos con personal altamente ' +
      'preparado, y además de estar certificados por el Programa de Aseguramiento de la Calidad en ' +
      'Tamiz Neonatal del CDC (Centro para el Control y Prevención de Enfermedades).',
    },
      'Hematología': {'bg': '../../assets/servicios/lans_biologia_molecular.png',
      'img': '',
      'parrafoPrincipal': 'En esta Área la citometría hemática es una prueba multiparamétrica ' +
      'rutinaria altamente solicitada ya que aporta gran información en la ' +
      'evaluación clínica del paciente, el área cuenta con tecnología ' +
      'avanzada para el proceso de esta prueba, se ha incorporado un auto-analizador de última ' +
      'generación que permite visualizar de manera más práctica todos los parámetros' +
      ', así como la distribución leucocitaria realizada por tinción ' +
      'inmunohistoquímica de peroxidasa y los gráficos de distribución eritrocitaria permitiendo ' +
      'clasificar las anemias de manera más práctica.',
      'parrafo2': 'De igual forma para conocer el estado inmunológico del paciente y para saber la ' +
      'efectividad en el tratamiento de pacientes con HIV, se cuenta con un equipo de citometría de ' +
      'flujo de 4 colores en donde se realiza la determinación de la subpoblación linfocitaria.',
      'parrafo3': 'En esta área también se cuenta con un equipo automatizado de última generación ' +
      'para el proceso de pruebas de rutina como Tiempo de protrombina, Tiempo parcial de ' +
      'tromboplastina, Fibrinógeno y pruebas especializadas como Factores de la coagulación, ' +
      'Anticoagulante lúpico, Proteína S y C de la coagulación.',
    },
      'Inmunología': {'bg': '../../assets/servicios/lans_biologia_molecular.png',
      'img': '',
      'parrafoPrincipal': 'El área de Inmunología/ ELISAS, es una de las áreas complementarias ' +
      'en el diagnóstico clínico, implementado técnicas de alta sensibilidad y especificidad en la ' +
      'detección de enfermedades infecciosas, alérgicas y autoinmunes principalmente.ELISA es una de ' +
      'las técnicas más utilizadas para identificar o ' +
      'confirmar la especificidad de los anticuerpos presentes en las muestras de los pacientes con múltiples enfermedades.',
      'parrafo2': 'Además, por su fácil estandarización, manejo y variedad de antígenos disponibles. ' +
      'Si bien existen diferentes tipos de ELISA, el más utilizado en el laboratorio de diagnóstico ' +
      'de autoinmunidad es el ELISA indirecto, el cual se fundamenta en el reconocimiento de los ' +
      'anticuerpos específicos presentes en las muestras de los pacientes, mediante un anticuerpo ' +
      'dirigido contra la región Fc humana de cualquier isotipo (IgG, IgA o IgM).',
      'parrafo3': 'La técnica puede ser cualitativa si solo se requiere conocer si existen o no ' +
      'anticuerpos con reactividad por determinado antígeno o cuantitativa si se requiere conocer ' +
      'la cantidad de anticuerpos presentes en las muestras, para lo cual el ensayo debe incluir ' +
      'una curva patrón de reactividad especifica.',
    },
      'Inmunoquímica': {'bg': '../../assets/servicios/lans_biologia_molecular.png',
      'img': '',
      'parrafoPrincipal': 'El área de Inmunoquímica se encuentra conformada por cuatro equipos ' +
      'de vanguardia. Aquí se procesan la mayor parte de las pruebas realizadas en el laboratorio. ' +
      'Entre las pruebas que se realizan se encuentran: Serología infecciosa, Marcadores cardíacos, ' +
      'Marcadores Tumorales, Pruebas de Fertilidad, Perfil Torch, Perfil Tiroideo, Función adrenal, ' +
      'Metabolismo óseo, Biomarcador de respuesta inflamatoria, Drogas terapéuticas, etc.',
      'parrafo2': 'Éstas pruebas ayudan al diagnóstico de diversas enfermedades, son también de ' +
      'mucha utilidad para que el médico pueda llevar a cabo un correcto seguimiento al tratamiento del paciente.',
      'parrafo3': 'Para poder obtener un resultado seguro se debe cumplir correctamente con algunos ' +
      'criterios; El paciente debe atender a las indicaciones que se proporcionan antes de ' +
      'la toma de muestra, esto es para que la muestra que se obtenga se de calidad. El personal de ' +
      'laboratorio debe de identificar, almacenar y transportar dicha muestra correctamente, así ' +
      'como también debe de cerciorarse que la cantidad sea suficiente. Se debe cumplir también de ' +
      'manera adecuada la fase analítica y para esto se lleva a cabo el proceso de control de calidad interno.',
    }
    };
    this.areas.sort();
    this.selectedArea = this.areas[0];
  }
/*
  Este bloque de código se comentó porque mostraba un error en el browser
  preguntarle a Cristian para que habia puesto esta parte del codigo


  @HostListener('window:load', ['$event']) onPageLoad($event) {
    this.dataShare.updatePos('servicios', $('#anclaServicios').offset().top);
  }

  @HostListener('window:resize', ['$event']) onPageResize($event) {
    this.dataShare.updatePos('servicios', $('#anclaServicios').offset().top);
  }
*/
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

}
