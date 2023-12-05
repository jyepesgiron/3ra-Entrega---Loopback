import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { LogueoService } from '../logueo.service';

@Injectable({
  providedIn: 'root'
})
export class Permiso implements CanActivate {
  
  constructor(private Logueo: LogueoService, private enlace: Router){

  }

  canActivate(): boolean{
    if(this.Logueo.Logged()){
      return true;
    }
    this.enlace.navigate(['/Logueo']);
    return false;
  }
}
