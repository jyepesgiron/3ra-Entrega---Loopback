import { Injectable } from '@angular/core';
import { Apartado } from 'src/app/Modelos/Apartado'; 
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddService {

  Url = "http://localhost:3000";

  constructor(private ruta: HttpClient) { }

  AñadirItem(apartado: Apartado): Observable<any>{
    return this.ruta.post<any[]>(this.Url+'/apartados', apartado);
  }
}
