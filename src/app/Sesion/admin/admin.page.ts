import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LogueoService } from 'src/app/Servicios/logueo.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit {

  constructor(private enlace: Router, private Logueo: LogueoService) { }

  ngOnInit() {
  }

  LogOut(){
    this.Logueo.LogOut();
  }
}
