import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { GestionPageModule } from './gestion/gestion.module';
import { InicioModule } from './inicio/inicio.module';
import { RevisionModule } from './revision/revision.module';
import { ModificacionModule } from './modificacion/modificacion.module';
import { HttpClientModule } from '@angular/common/http';
import { ShowService } from 'src/app/Servicios/Admin/Revision/show.service';
import { ModService } from 'src/app/Servicios/Admin/Modificacion/mod.service';

import { IonicModule } from '@ionic/angular';

import { AdminPageRoutingModule } from './admin-routing.module';

import { AdminPage } from './admin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminPageRoutingModule,
    HttpClientModule
  ],
  declarations: [AdminPage],
  providers: [ ShowService, ModService ]
})
export class AdminPageModule {}
