import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EstudiantePage } from './estudiante.page';
import { RegistroComponent } from './registro/registro.component';

const routes: Routes = [
  {
    path: '',
    component: EstudiantePage,
    children:[
      {path: 'registro', component: RegistroComponent}
    ]
  },
  {
    path: 'sesion',
    loadChildren: () => import('../../Sesion/estudiante/sesion/sesion.module').then( m => m.SesionPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EstudiantePageRoutingModule {}
