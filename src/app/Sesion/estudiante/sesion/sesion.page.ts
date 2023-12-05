import { Component, OnInit } from '@angular/core';
import { LogueoService } from 'src/app/Servicios/logueo.service';

@Component({
  selector: 'app-sesion',
  templateUrl: './sesion.page.html',
  styleUrls: ['./sesion.page.scss'],
})
export class SesionPage implements OnInit {

  constructor(public Logueo: LogueoService) { }

  ngOnInit() {
  }

  LogOut(){
    this.Logueo.LogOut();
  }
}
