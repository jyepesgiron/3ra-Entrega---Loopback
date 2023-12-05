import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AddService } from 'src/app/Servicios/Admin/Gestion/add.service';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AgregarItemComponent } from './agregar-item.component';
import { AgregarItemRoutingModule } from './agregar-item-routing.module';

@NgModule({
  declarations: [AgregarItemComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AgregarItemRoutingModule, ReactiveFormsModule, FormsModule, HttpClientModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, AddService],
  bootstrap: [AgregarItemComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AgregarItemModule {}
