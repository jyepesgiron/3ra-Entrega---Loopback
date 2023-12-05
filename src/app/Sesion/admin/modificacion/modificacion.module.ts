import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ModService } from 'src/app/Servicios/Admin/Modificacion/mod.service';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { ModificacionComponent } from './modificacion.component';
import { ModificacionRoutingModule } from './modificacion-routing.module';

@NgModule({
  declarations: [ModificacionComponent],
  imports: [BrowserModule, IonicModule.forRoot(), ModificacionRoutingModule, HttpClientModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, ModService],
  bootstrap: [ModificacionComponent],
})
export class ModificacionModule {}
