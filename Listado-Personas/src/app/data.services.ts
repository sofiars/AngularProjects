import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginService } from './login/login.service';
import { Persona } from './persona.model';
@Injectable()

export class DataServices {
    constructor(private httpClient: HttpClient,
        private loginService:LoginService) {
    }

    cargarPersonas() {
        const token = this.loginService.getIdToken();
        return this.httpClient.get('https://listado-personas-cc80e-default-rtdb.firebaseio.com/datos.json?auth='+token);
    }

    //Guarda todo el arreglo de personas 
    guardarPersonas(personas: Persona[]) {
        const token = this.loginService.getIdToken();
        this.httpClient.put('https://listado-personas-cc80e-default-rtdb.firebaseio.com/datos.json?auth='+ token , personas)
        .subscribe(
            (response) => {
                console.log("resultado guardar Personas: " + response);
            },
            (error) => console.log("Error en guardar Personas: " + error)
        );
}
    modificarPersona(index: number, persona: Persona) {
        let url: string;
        const token = this.loginService.getIdToken();
        url = 'https://listado-personas-cc80e-default-rtdb.firebaseio.com' + '/datos/' + (index) + '.json?auth=' + token;
        this.httpClient.put(url, persona)//nos regresa un objeto observable
            .subscribe(
                (response) => {
                    console.log("resultado modificar Personas: " + response);
                },
                (error) => console.log("Error en modificar Personas: " + error)

            );
    }
    eliminarPersona(index:number){
        let url: string;
        const token = this.loginService.getIdToken();
        url = 'https://listado-personas-cc80e-default-rtdb.firebaseio.com' + '/datos/' + (index) + '.json?auth=' + token;
        this.httpClient.delete(url)
            .subscribe(
                (response) => {
                    console.log("resultado eliminar Personas: " + response);
                },
                (error) => console.log("Error en eliminar Personas: " + error)

            );
    }
}