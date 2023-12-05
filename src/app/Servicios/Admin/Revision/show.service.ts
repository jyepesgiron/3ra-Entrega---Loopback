import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShowService {
 
  Url = "http://localhost:3000/";

  constructor(private ruta: HttpClient) { }

  Listado(): Observable<any>{
    return this.ruta.get<any[]>(this.Url+'items');
  }

  AP_Show(): Observable<any>{
    return this.ruta.get<any[]>(this.Url+'ante-proyectos');
  }

}
