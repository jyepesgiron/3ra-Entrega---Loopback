import { Component, OnInit } from '@angular/core';
import { Apartado } from 'src/app/Modelos/Apartado';
import { Apartado_Aux } from 'src/app/Modelos/Apartado_Aux';
import { Item } from 'src/app/Modelos/Item';
import { DeleteService } from 'src/app/Servicios/Admin/Gestion/delete.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-eliminar-item',
  templateUrl: './eliminar-item.component.html',
  styleUrls: ['./eliminar-item.component.scss'],
})
export class EliminarItemComponent  implements OnInit {
  
  Datos_Apartado: Apartado[] = [];
  Apartado2: Apartado_Aux[] = [];
  Nombre_Seleccionado: string = '';
  Espacio: Apartado[] = [];
  Espacio2 = {
    Nombre: ''
  };
  Space: Item[] = [];
  id: any;

  constructor(public drop: DeleteService, private alerta: AlertController) { }

  ngOnInit(){
    this.Mostrar();
  } 

  Mostrar(){
    this.drop.MostrarApartado().subscribe((data)=>{
      this.Datos_Apartado = data;   
      for(let i=0; i<this.Datos_Apartado.length; i++){
        this.Apartado2[i] = new Apartado_Aux(this.Datos_Apartado[i].Nombre, false);
      } 
    })
  }

  //------------------------------------------------

  handleCheckboxChange(checked: boolean, selectedOption: any) {
    // Desmarca las otras opciones cuando se selecciona una
    if (checked) {
      for (const option of this.Apartado2) {
        if (option !== selectedOption) {
          option.isChecked = false;
        }else{
          this.Nombre_Seleccionado = option.Nombre; 
        }
      }
    }
  }

  async Action(){
    const alert = await this.alerta.create({
      header: 'Dato',
      message: '¿Estás segur@ de eliminar el apartado: '+this.Nombre_Seleccionado+'?',
      buttons: [
        {
          text: '¡No!',
          role: 'cancel',
          handler: (dd) =>{

          }
        },
        {
          text: '¡Sí!',
          handler: (dato) =>{
            this.Eliminar(this.Nombre_Seleccionado);
          }
        }
      ]
    })

    await alert.present();
  }

  Eliminar(Nombre: string){
    this.drop.MostrarApartado().subscribe(async (data)=>{
      this.Espacio = data;
      for(let i=0; i<this.Espacio.length; i++){
        if(this.Espacio[i].Nombre == Nombre){
          this.drop.EliminarApartado(this.Espacio[i].id).subscribe((dato)=>{
            this.drop.MostrarItem().subscribe((data2)=>{
              this.Space = data2;
              for(let j=0; j<this.Space.length; j++){
                if(this.Space[j].Nombre == Nombre){
                  this.drop.EliminarItem(this.Space[j].id).subscribe((dato2)=>{
                    console.log("¡Completado!");
                  })
                }
              }
            })
          })
          const a = await this.alerta.create({
            header: 'Eliminación',
            message: '¡Terminado!',
            buttons: ['¡Ok!']
          })
          await a.present();
        }
      }
    })
  }
}
