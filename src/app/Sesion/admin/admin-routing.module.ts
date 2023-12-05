import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminPage } from './admin.page';
import { InicioComponent } from './inicio/inicio.component';
import { RevisionComponent } from './revision/revision.component';
import { ModificacionComponent } from './modificacion/modificacion.component';

const routes: Routes = [
  {
    path: '',
    component: AdminPage,
    children:[
      {path: '', component: InicioComponent},
      {path: 'Gestion', loadChildren: () => import('../../Sesion/admin/gestion/gestion.module').then( m => m.GestionPageModule)},
      {path: 'Revision', component: RevisionComponent},
      {path: 'Modificacion', component: ModificacionComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminPageRoutingModule {}
