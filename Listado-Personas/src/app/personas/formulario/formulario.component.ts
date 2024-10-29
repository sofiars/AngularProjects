import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoggingService } from '../../LoggingService.service';
import { Persona } from '../../persona.model';
import { PersonasService } from '../../persona.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  nombreInput:string;
  apellidoInput:string;
  index: number; 
  modoEdicion:number;

  constructor(private loggingServce:LoggingService,
              private personaService:PersonasService,
              private router: Router,
              private route:ActivatedRoute){}

  guardarPersona(){
    let persona1 = new Persona(this.nombreInput, this.apellidoInput);
    if(this.modoEdicion != null && this.modoEdicion === 1){
      this.personaService.modificarPersona(this.index, persona1);
    }else{
      this.personaService.agregarPersona(persona1);
    }
    this.router.navigate(['personas']);
  }
  ngOnInit(){
    this.index = this.route.snapshot.params['id'];
    //el + convierte de tipo string a number
    this.modoEdicion = +this.route.snapshot.queryParams['modoEdicion'];
    if(this.modoEdicion != null && this.modoEdicion === 1){
     let persona: Persona = this.personaService.encontrarPersona(this.index);
     this.nombreInput = persona.nombre;
     this.apellidoInput =  persona.apellido;
    }

  }
  eliminarPersona(){
    if(this.index != null){
      this.personaService.eliminarPersona(this.index);
    }
    this.router.navigate(['personas']);
  }

}
