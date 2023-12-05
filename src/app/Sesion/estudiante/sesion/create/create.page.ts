import { Component, OnInit, NgZone } from '@angular/core';
import { Apartado } from 'src/app/Modelos/Apartado';
import { MostrarService } from 'src/app/Servicios/Estudiante/Item/mostrar.service';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { IngresarService } from 'src/app/Servicios/Estudiante/Item/ingresar.service';
import { Item } from 'src/app/Modelos/Item';
import { AnteProyecto } from 'src/app/Modelos/AnteProyecto';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})
export class CreatePage implements OnInit {
  
  Apartado: FormGroup;
  ListaApartados: Apartado[] = [];
  Op: number = 0;
  cont: number = 0;
  cont2: number = 0;
  Token: string|null = "";
  DataItem = {
    Nombre: "",
    Contenido: "",
    Correo_Estudiante: "",
    ID_Estudiante: ""
  }
  ListaItem: Item[] = [];
  ListaAnteProyecto: AnteProyecto[] = [];
  ListaItem2: Item[] = [];
  ListaApartados2: Apartado[] = [];
  Conteo: number = 0;
  Cont: number = 0;
  pos: number = 0;
  Apartadoss: string[] = [];
  pos2: number = 0;
  tamano: number = 0;

  constructor(public Show: MostrarService, private fb: FormBuilder, public alerta: AlertController, public Agregar: IngresarService, private walk: Router) { 
    this.Apartado = this.fb.group({
      'Nombre': new FormControl("", Validators.required)
    })
  }

  ngOnInit() {
    this.Token = localStorage.getItem('CapacitorStorage.token');
  }

  Decod_id(token: String|null){
    const arrayT = token!.split('.');
    const tokenP = JSON.parse(atob(arrayT[1]));
    return tokenP.id;
  }

  Decod_email(token: String|null){
    const arrayT = token!.split('.');
    const tokenP = JSON.parse(atob(arrayT[1]));
    return tokenP.email;
  }

  MostrarApartados(){
    this.Show.ShowApartados().subscribe((datos)=>{
      this.ListaApartados = datos;
      console.log(this.ListaApartados);
    })
  }

  Ingresar(){
    this.Cont = 0;
    this.Conteo = 0;
    this.pos2 = 0;
    this.cont2 = 0;
    this.Show.ShowApartados().subscribe(async (datos)=>{
      this.ListaApartados = datos;
      if(this.ListaApartados[0].Nombre!=null){
        //this.Formulario(this.ListaApartados[0].Nombre);
        this.Rep();
      }
    })
  }

  Rep(){
    this.Form(this.Decod_id(this.Token));
  }
  //------------------------------------------------------------------------

  Form(id: any){
    this.Agregar.Mostrar().subscribe((datox)=>{
      this.ListaItem2 = datox; 
      for(let i=0; i<this.ListaItem2.length; i++){
        if(this.ListaItem2[i].ID_Estudiante == id){
          this.Apartadoss[this.cont] = this.ListaItem2[i].Nombre;
          //console.log(this.Apartadoss[this.cont]);
          this.cont++;
        }
      }
    })
    this.Agregar.MostrarApartado().subscribe(async (data)=>{
      this.ListaApartados2 = data;
      for(let i=0; i<this.ListaApartados2.length; i++){
        if(this.ListaApartados2[i].Nombre != this.Apartadoss[this.Conteo]){
          this.pos2 = i;
        }
        if(this.Apartadoss[this.Conteo+1]!=null){
          this.Conteo++;
        }
      }
      //console.log(this.Apartadoss.length+" // "+this.ListaApartados2.length);
      
      if(this.Apartadoss.length<=this.ListaApartados2.length){
        this.Registrar(this.ListaApartados2[this.Apartadoss.length].Nombre, this.Apartadoss.length);
      }
    })
  }

  //-------------------------------------------------------------------------
  async Registrar(Nombre: string, Number: number){
    const alert = await this.alerta.create({
      header: 'Registro',
      message: Nombre,
      inputs: [
        {
          name: 'Contenido',
          type: 'text',
          placeholder: 'Contenido'
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: (dd) =>{
            this.walk.navigate(['Funcion/sesion/view']);
          }
        },
        {
          text: 'Registrar',
          handler: (data) =>{
            this.DataItem.Nombre = Nombre;
            this.DataItem.Contenido = data.Contenido;
            this.DataItem.ID_Estudiante = this.Decod_id(this.Token);
            this.DataItem.Correo_Estudiante = this.Decod_email(this.Token);
            this.Agregar.Ingresar(this.DataItem).subscribe((datoss)=>{
              console.log(datoss);
            })           
            Number++;
            if(Number!=this.ListaApartados2.length){
              this.Conteo = 0;
              this.Registrar(this.ListaApartados2[Number].Nombre, Number);
            }
            
          }
        }
      ]
    })
    await alert.present();
  }
  
}
