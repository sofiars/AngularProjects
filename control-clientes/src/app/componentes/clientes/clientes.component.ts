import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/modelo/cliente.model';
import { ClienteServicio } from 'src/app/servicios/cliente.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  clientes: Cliente[] = [];
  cliente: Cliente ={
    nombre: '',
    apellido: '',
    email: '',
    saldo: 0
  }
  constructor(private clientesServicio:ClienteServicio) { }

  ngOnInit(): void {
    this.clientesServicio.getClientes().subscribe(
    clientes=>{
      this.clientes = clientes;
    }
    )
  }
  getSaldoTotal(){
    let saldoTotal: number = 0;
    if(this.clientes){
      this.clientes.forEach( cliente =>{
        saldoTotal += 1;
      })
    }
    return saldoTotal;
  }

}
