import { Component, OnInit } from '@angular/core';
import { LogueoService } from 'src/app/Servicios/logueo.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss'],
})
export class InicioComponent  implements OnInit {

  constructor(private Logueo: LogueoService) { }

  ngOnInit() {}

  LogOut(){
    this.Logueo.LogOut();
  }

}
