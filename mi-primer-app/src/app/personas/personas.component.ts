import { Component } from "@angular/core";

@Component({
    selector:'app-personas',
    templateUrl: './personas.component.html',
    styleUrls: ['./personas.component.css']
    /*styles:[`
    h1{
        color: blue
    }*/
})
export class PersonasComponent{
    deshabilitar  = false;
    mensaje = '';
    titulo = 'Ingeniero';
    mostrar= false;
    agregarPersona(){
        this.mostrar= true;
        this.mensaje  ='Persona agregada';

    }
    /*modificarTitulo(event: Event){
        this.titulo = (<HTMLInputElement>event.target).value; //hace referencia al objeto quee estamos llamando en ese momento
    }*/
}