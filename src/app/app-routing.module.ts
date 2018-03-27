import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { CatalogoComponent } from './catalogo/catalogo.component';

const routes: Routes = [
  {
    path: 'Catalogo',
    children: [],
    component: CatalogoComponent
  },
  {
    path: '',
    children: [],
    component: MainComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
