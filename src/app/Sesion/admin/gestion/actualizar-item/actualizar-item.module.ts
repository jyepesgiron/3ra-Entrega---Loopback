import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { ActuallService } from 'src/app/Servicios/Admin/Gestion/actuall.service';
import { FormsModule } from '@angular/forms';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { ActualizarItemComponent } from './actualizar-item.component';
import { ActualizarItemRoutingModule } from './actualizar-item-routing.module';

@NgModule({
  declarations: [ActualizarItemComponent],
  imports: [BrowserModule, IonicModule.forRoot(), ActualizarItemRoutingModule, FormsModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, ActuallService],
  bootstrap: [ActualizarItemComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class ActualizarItemModule {}
