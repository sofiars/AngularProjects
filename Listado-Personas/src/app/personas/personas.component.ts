import { Component, OnInit } from '@angular/core';
import { Persona } from '../persona.model';
import { LoggingService } from '../LoggingService.service';
import { Router, ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { PersonasService } from '../persona.service';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent implements OnInit {

  personas: Persona[] = [];

  constructor(private loggingService: LoggingService,
    private personasService: PersonasService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {

    this.personasService.obtenerPersonas()
      .subscribe(//nos subcrimos para poder recuperar la info
        res => {
          //Cargamos los datos de la base de datos al arreglo de personas local 
          console.log("Respuesta DB: " + res)
          this.personas = <Persona[]>res;
          this.personasService.setPersonas(<Persona[]>res);
        },
        error => console.error(error)

      );

  }



  agregar() {
    console.log("nos vamos a agregar ");
    this.router.navigate(['./personas/agregar'], { queryParams: { modoEdicion: 0 } });
  }
}
