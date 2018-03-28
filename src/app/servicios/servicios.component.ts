import { Component, OnInit, HostListener } from '@angular/core';
import { logWarnings } from 'protractor/built/driverProviders';
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

  constructor( ) { }

  ngOnInit() {
    this.areas = [ 'Biología Molecular', 'Química Clínica', 'Microbiología', 'Patología', 'Toxicología',
                'Neonatología', 'Hematología', 'Inmunología', 'Inmunoquímica'];
    this.Card = {
      'Biología Molecular': {'bg': '../../assets/servicios/lans_biologia_molecular.png',
      'img': '../../assets/servicios/lans_biologia_molecularB.png',
      'parrafoPrincipal': 'El Diagnóstico Molecular ha revolucionado el diagnóstico clínico ' +
      'y es una de las áreas del laboratorio clínico con mayor crecimiento y desarrollo.',
      'parrafo2': 'Las nuevas tecnologías, rápidas y precisas, han hecho de esta área una ' +
      'herramienta clave para muchas áreas de la salud, en particular ha sido de gran utilidad en ' +
      'la detección de enfermedades infecciosas y genéticas.',
      'parrafo3': 'Algunas de las pruebas que procesamos en esta área mediante PCR en tiempo real son:',
      'pruebas' : ['Carga Viral de Citomegalovirus',
        'Carga Viral de VIH',
        'Carga Viral de Hepatitis C',
        'Detección de VPH de alto riesgo',
        'Detección Mycobacterium Tuberculosis',
        'Detección de Chlamydia Trachomatis'
        ]
    },
      'Química Clínica': {'bg': '../../assets/servicios/lans_biologia_molecular.png',
      'img': '../../assets/servicios/quimicaclinica.png',
      'parrafoPrincipal':  'El área de Química Clínica integra las bases fundamentales de ' +
      'la química y la bioquímica relacionada con los mecanismos de la fisiología y la patología ' +
      'para evaluar los cambios que ocurren en el organismo.',
      'parrafo2': 'Contamos con plataformas de medición directa de alta tecnología, que utilizan ' +
      'metodologías como fotometría, potenciometría y turbidimetría.',
      'parrafo3': 'Algunas de las pruebas que procesamos en esta área son:',
      'pruebas' : ['Electrolitos Séricos (Na, Cl, K, Mg, P, Ca)',
        'CK Total y CK-MB',
        'Bióxido de Carbono (CO2)',
        'Colinesterasa',
        'Apolipoproteínas A1 y B',
        'Cistatina C'
        ]
    },
      'Microbiología': {'bg': '../../assets/servicios/lans_biologia_molecular.png',
      'img': '../../assets/servicios/microbiologia.png',
      'parrafoPrincipal':  'La Microbiología Clínica se encarga del diagnóstico y seguimiento ' +
      'microbiológico de las enfermedades infecciosas mediante la identificación y aislamiento de ' +
      'los agentes infecciosos, utilizando técnicas de cultivo, medios selectivos y diferenciales que ' +
      'permitan el aislamiento de los principales patógenos y la selección del tratamiento que anule los ' +
      'efectos patológicos en cada uno de los sitios anatómicos con sospecha de infección bacteriana. ',
      'parrafo2': 'Nuestro departamento de microbiología utiliza tecnología de colorimetría avanzada para ' +
      'identificación microbiana y cuenta con una amplia experiencia. ',
      'parrafo3': 'Algunas de las pruebas que procesamos en esta área son:',
      'pruebas' : ['Mycoplasma Hominis',
        'Ureaplasma Urealyticum',
        'Hemocultivos'
        ]
    },
      'Patología': {'bg': '../../assets/servicios/lans_biologia_molecular.png',
      'img': '../../assets/servicios/patologiaB.png',
      'parrafoPrincipal': 'El área de patología se encarga del correcto diagnóstico ' +
      'histológico y citológico por medio de morfología, inmunohistoquímica, inmunomarcadores de ' +
      'proliferación y mutaciones, entre otros  para definir las causas, desarrollo y pronóstico de las enfermedades. ',
      'parrafo3': '',
      'parrafo2': 'Algunas de las pruebas que procesamos en esta área son:',
      'pruebas' : ['Citología Cérvico-Vaginal (Papanicolaou)',
        'Papanicolaou Cérvico-Vaginal en Base Líquida',
        'Papanicolaou de Líquidos Biológicos Diversos',
        'Detección de HER2',
        'Citología por Aspiración con Aguja Fina'
        ]
    },
      'Toxicología': {'bg': '../../assets/servicios/lans_biologia_molecular.png',
      'img': '../../assets/servicios/toxicologia.png',
      'parrafoPrincipal': 'El área de Toxicología se encarga de la detección y monitoreo del ' +
      'consumo de drogas (terapéuticas o de abuso) y exposición a tóxicos industriales o ambientales. ' +
      'La orina es el espécimen más usado, el más efectivo para la determinación y para el que se dispone ' +
      'de numerosas técnicas.',
      'parrafo3': '',
      'parrafo2': 'Algunas de las pruebas que procesamos en esta área son:',
      'pruebas' : ['Anfetaminas', 'Benzodiacepinas', 'Canabinoides (THC)', 'Cocaína', 'Morfina (Opiáceos)',
        'Barbituratos', 'Ciclosporina', 'Tacrolimus', 'Sirolimus', 'Everolimus',
        'Plomo', 'Aluminio', 'Zinc', 'Cadmio', 'Manganes'
      ]
    },
      'Neonatología': {'bg': '../../assets/servicios/lans_biologia_molecular.png',
      'img': '../../assets/servicios/neonatologia.png',
      'parrafoPrincipal': 'El área de Neonatología se encarga del diagnóstico de las enfermedades ' +
      'del ser humano dentro de los primeros 28 días de vida.',
      'parrafo2': 'En LANS Laboratorios apoyamos este diagnóstico a través del Tamiz Metabólico Neonatal, ' +
      'que consiste en una serie de pruebas que se realizan a partir de una muestra sanguínea tomada del ' +
      'talón del pie del recién nacido, con el objeto de detectar oportunamente enfermedades metabólicas.',
      'parrafo3': 'Algunos ejemplos de las enfermedades que pueden ser detectadas son:',
      'pruebas' : ['hipotiroidismo congénito', 'fibrosis quística', 'hiperplasia adrenal congénita',
      'galactosemia', 'aminoacidopatías (fenilcetonuria (PKU), tirosinemia hereditaria, enfermedad de jarabe de maple, etc.)',
      'acidemias orgánicas', 'transtornos en la oxidación de ácidos grasos',
      'hemoglobinopatías (hemoglobinas anormales)'
      ]
    },
      'Hematología': {'bg': '../../assets/servicios/lans_biologia_molecular.png',
      'img': '../../assets/servicios/inmunologiaB.png',
      'parrafoPrincipal': 'Dentro del área de Hematología se estudian los elementos formes de la ' +
      'sangre y sus precursores, así como de los trastornos estructurales y bioquímicos, que pueden ' +
      'conducir a una enfermedad.',
      'parrafo2': 'En LANS contamos con analizadores de última generación que permiten visualizar de ' +
      'manera eficaz estos elementos con gráficos de distribución eritrocitaria permitiendo clasificar ' +
      'las anemias y tinciones de peroxidasa para la cuenta diferencial que brindan información clínica adicional.',
      'parrafo3': 'En esta área también se cuenta con equipo automatizado de última generación para el proceso ' +
      'de pruebas de Coagulación básica y especializada como: ',
      'pruebas' : ['Factores de la coagulación',
        'Anticoagulante lúpico',
        'Proteína S de la coagulación',
        'Proteína S de la coagulación',
        'Factor V de Leiden'
      ]
    },
      'Inmunología': {'bg': '../../assets/servicios/lans_biologia_molecular.png',
      'img': '../../assets/servicios/inmunologia.png',
      'parrafoPrincipal': 'Es la ciencia que estudia todos los aspectos del sistema inmunitario normal y ' +
      'patológico, e incluye las enfermedades en las que los mecanismos inmunitarios no actúan adecuadamente, ' +
      'bien sea por razones genéticas o adquiridas.',
      'parrafo2': 'En el caso de las enfermedades autoinmunes, las técnicas inmunológicas son de gran ayuda ya ' +
      'que permiten la detección de auto-anticuerpos; para esto existen diferentes técnicas, sin embargo, ' +
      'una de las más utilizados es ELISA, que se fundamenta en el reconocimiento de los anticuerpos específicos ' +
      'presentes en las muestras de los pacientes, mediante un anticuerpo dirigido contra la región ' +
      'Fc humana (IgG, IgA o IgM).',
      'parrafo3': 'Algunas de las pruebas que procesamos en esta área son:',
      'pruebas' : ['Ac. Anti-Citoplasma de Neutrófilos Citoplasmáticos (c-ANCA)',
        'Ac. Anti-ADN de Doble Cadena (Nativo)',
        'Ac. Anti-Citoplasma de Neutrófilos Perinucleares (p-ANCA)',
        'Ac. Anti-Fosfolípidos IgG',
        'Ac. Anti-Fosfolípidos IgM',
        'Ac. Anti-Smith',
        'Hormona Anti-Mulleriana',
        'Ac. Anti-Treponema pallidum (FTA-ABS)',
        'Ac. Anti-Nucleares (ANA)',
        'Ac. Anti-Músculo Liso',
        'Anticuerpos Anti-DNA Nativo Cuantitativo',
        'Ac. Anti-Centrómero',
        'Ac. Anti-Mitocondriales'
      ]
    },
      'Inmunoquímica': {'bg': '../../assets/servicios/lans_biologia_molecular.png',
      'img': '../../assets/servicios/hematologia.png',
      'parrafoPrincipal': 'La Inmunoquímica la podemos definir como el estudio de la constitución ' +
      'química de los antígenos y de los anticuerpos, o como la parte de la química que estudia las ' +
      'reacciones de inmunidad antígeno-anticuerpo.',
      'parrafo2': 'En realidad, se trata de una subdivisión de la inmunología, que se ha distinguido ' +
      'por ser automatizada y utilizar metodologías que ofrecen una mayor sensibilidad y especificidad.',
      'parrafo3': 'Contamos con plataformas analíticas de última generación que utilizan la metodología ' +
      'de quimioluminiscencia para la determinación de estudios como: ',
      'pruebas' : ['Antígeno Cyfra 21',
      'Ca 15-3',
      'Ca 125',
      'TORCH',
      'Panel de Hepatitis',
      'Vitamina D',
      'Tiroideos'
      ]
    }
    };
    this.areas.sort();
    this.selectedArea = this.areas[0];
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

}
