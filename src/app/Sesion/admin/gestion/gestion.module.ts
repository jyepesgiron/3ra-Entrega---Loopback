import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { ActualizarItemModule } from './actualizar-item/actualizar-item.module';
import { AgregarItemModule } from './agregar-item/agregar-item.module';
import { EliminarItemModule } from './eliminar-item/eliminar-item.module';
import { EditarItemModule } from './editar-item/editar-item.module';
import { ActuallService } from 'src/app/Servicios/Admin/Gestion/actuall.service';
import { AddService } from 'src/app/Servicios/Admin/Gestion/add.service';
import { EditService } from 'src/app/Servicios/Admin/Gestion/edit.service';
import { DeleteService } from 'src/app/Servicios/Admin/Gestion/delete.service';

import { IonicModule } from '@ionic/angular';

import { GestionPageRoutingModule } from './gestion-routing.module';

import { GestionPage } from './gestion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GestionPageRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  declarations: [GestionPage],
  providers: [ActuallService, AddService, EditService, DeleteService]
})
export class GestionPageModule {}
