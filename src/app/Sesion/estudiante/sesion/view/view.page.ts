import { Component, OnInit } from '@angular/core';
import { MostrarService } from 'src/app/Servicios/Estudiante/Item/mostrar.service';
import { Item } from 'src/app/Modelos/Item';
import { Apartado } from 'src/app/Modelos/Apartado';

@Component({
  selector: 'app-view',
  templateUrl: './view.page.html',
  styleUrls: ['./view.page.scss'],
})
export class ViewPage implements OnInit {

  ListaItems: Item[] = [];
  ListaItems_Aux: any[] = [];
  Token: string | null = "";
  id: string = "";
  cont: number = 0;

  constructor(private Show: MostrarService) { }

  ngOnInit() {
    this.Token = localStorage.getItem('CapacitorStorage.token');
    this.MostrarItem();
  }

  Decod(token: String|null){
    const arrayT = token!.split('.');
    const tokenP = JSON.parse(atob(arrayT[1]));
    return tokenP.id;
  }

  MostrarItem(){
    this.Show.Show().subscribe((dato)=>{
      this.ListaItems = dato;
      for(let i=0; i<this.ListaItems.length; i++){
        if(this.ListaItems[i].ID_Estudiante == this.Decod(this.Token)){
          console.log(this.ListaItems[i]);
          this.ListaItems_Aux[this.cont] = this.ListaItems[i];
          this.cont++;
        }
      }
    })
  }

}
