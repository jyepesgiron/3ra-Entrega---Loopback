import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@capacitor-community/http';
import { HttpResponse } from '@capacitor/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LogueoService {

  constructor(private enlace: Router) { }
  
  LogIn = async (correo: string, contrasena: string) =>{
    const option = {
      url: 'http://localhost:3000/users/login',
      headers: { accept: 'application/json', 'Content-type': 'application/json' },
      data: { email: correo , password: contrasena }
    };
    
    const response: HttpResponse = await Http.post(option);
    return response;
  }

  Logged(): Boolean{
    return !!localStorage.getItem('CapacitorStorage.token')
  }

  getToken(){
    return localStorage.getItem('CapacitorStorage.token')
  }
 
  LogOut(){
    localStorage.removeItem('CapacitorStorage.token');
    this.enlace.navigate(['/Logueo']);
  }

}
