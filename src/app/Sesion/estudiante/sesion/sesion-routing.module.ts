import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SesionPage } from './sesion.page';

const routes: Routes = [
  {
    path: '',
    component: SesionPage,
    children:[
      {path: 'create', loadChildren: () => import('../../../Sesion/estudiante/sesion/create/create.module').then( m => m.CreatePageModule)},
      {path: 'view', loadChildren: () => import('../../../Sesion/estudiante/sesion/view/view.module').then( m => m.ViewPageModule)}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SesionPageRoutingModule {}
