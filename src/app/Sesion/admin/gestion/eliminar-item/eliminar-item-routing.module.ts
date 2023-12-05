import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { EliminarItemComponent } from './eliminar-item.component';

const routes: Routes = [
  {
    path: '',
    component: EliminarItemComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class EliminarItemRoutingModule { }
