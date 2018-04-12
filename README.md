# LANS (lans.mx)

This project was developed in Mexico City for LANS 'laboratorios de referencia'. 

# LANSlanding

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.3.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Estructura del Código

La estructura a grandes rasgos es la siguiente:
  
  -Archivos de congfiguración (package.json,proactor.conf,etc)
  -Dependencias (node_modules)
  -Aplicativo (src)
  
## SRC Directory

El directorio src contiene los archivos que conforman la página algúnos de los mas importantes son:

  index.html (Es el encargado de desplegar el contenido de la  ngApp)
  styles.css (CSS global)
  App (Directorio con el contenido de la APP)
  assets (Carpeta con todo el contenido estático, fotos, videos, archivos, etc)
  
## APP Directory

En este directorio se guardan los componentes.

Cada componente esta conformado por un set de 4 archivos:
  -Archivo.css para estilos locales al componente
  -Archivo.ts para lógica local al componente
  -Archivo.spec.ts para pruebas al componente
  -Archivo.html para maquetado del componente

