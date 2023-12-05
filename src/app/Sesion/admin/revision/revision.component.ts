import { Component, OnInit } from '@angular/core';
import { ShowService } from 'src/app/Servicios/Admin/Revision/show.service';
import { AnteProyecto } from 'src/app/Modelos/AnteProyecto';
import { Item } from 'src/app/Modelos/Item';

@Component({
  selector: 'app-revision',
  templateUrl: './revision.component.html',
  styleUrls: ['./revision.component.scss'],
})
export class RevisionComponent  implements OnInit {

  ListaAP: AnteProyecto[] = [];
  ListaItem: Item[] = [];
  Lista: any[] = [];
  Lista_aux: any[] = [];
  Dueno_Lista: any[] = [];
  Cont: number = 0;
  Cont2: number = 0;

  constructor(public item: ShowService) { }

  ngOnInit() {
    this.Listado();
  }

  Listado(){
    this.item.AP_Show().subscribe((dato)=>{
      this.ListaAP = dato;
      this.item.Listado().subscribe((dato2)=>{
        this.ListaItem = dato2;
        this.Cont=0;
        this.Cont2=0;
        for(let j=0; j<this.ListaItem.length; j++){
          if(this.Cont<this.ListaItem.length){
            this.Lista[j] = this.ListaItem[j];
          } 
          this.Cont++;
        }
        for(let i=0; i<this.ListaAP.length; i++){
          for(let k=0; k<this.ListaItem.length; k++){
            if(this.ListaAP[i].ID_Estudiante == this.ListaItem[k].ID_Estudiante){
              this.Lista_aux[this.Cont2] = this.ListaItem[k];
              console.log(this.Lista_aux[this.Cont2]);
              this.Cont2++;
            }
          }
        }
      })
    })
  }

}
