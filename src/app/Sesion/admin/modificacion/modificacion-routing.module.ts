import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ModificacionComponent } from './modificacion.component';

const routes: Routes = [
  {
    path: '',
    component: ModificacionComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class ModificacionRoutingModule { }
