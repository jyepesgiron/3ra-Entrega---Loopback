import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GestionPage } from './gestion.page';
import { AgregarItemComponent } from './agregar-item/agregar-item.component';
import { ActualizarItemComponent } from './actualizar-item/actualizar-item.component';
import { EditarItemComponent } from './editar-item/editar-item.component';
import { EliminarItemComponent } from './eliminar-item/eliminar-item.component';

const routes: Routes = [
  {
    path: '',
    component: GestionPage,
    children:[
      {path: 'Agg', component: AgregarItemComponent},
      {path: 'Act', component: ActualizarItemComponent},
      {path: 'Edit', component: EditarItemComponent},
      {path: 'Elimn', component: EliminarItemComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GestionPageRoutingModule {}
