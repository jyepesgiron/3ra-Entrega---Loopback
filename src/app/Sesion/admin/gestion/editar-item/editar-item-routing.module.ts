import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { EditarItemComponent } from './editar-item.component';

const routes: Routes = [
  {
    path: '',
    component: EditarItemComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class EditarItemRoutingModule { }
