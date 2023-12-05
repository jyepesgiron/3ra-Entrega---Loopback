export class Apartado_Aux {
    id?: string;
    Nombre: string;
    isChecked: boolean;

    constructor(Nombre: string, isChecked: boolean){
        this.Nombre = Nombre;
        this.isChecked = isChecked;
    }
}