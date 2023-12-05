import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MostrarService {
 
  Url = "http://localhost:3000";

  constructor(private ruta: HttpClient) { }

  Show(): Observable<any>{
    return this.ruta.get<any[]>(this.Url+'/items');
  }

  ShowApartados(): Observable<any>{
    return this.ruta.get<any[]>(this.Url+'/apartados');
  }

}
