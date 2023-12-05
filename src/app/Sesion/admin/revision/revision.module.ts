import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ShowService } from 'src/app/Servicios/Admin/Revision/show.service';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { RevisionComponent } from './revision.component';
import { RevisionRoutingModule } from './revision-routing.module';

@NgModule({
  declarations: [RevisionComponent],
  imports: [BrowserModule, IonicModule.forRoot(), RevisionRoutingModule, HttpClientModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, ShowService],
  bootstrap: [RevisionComponent]
})
export class RevisionModule {}
