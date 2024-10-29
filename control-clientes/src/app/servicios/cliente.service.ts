import { Injectable } from "@angular/core";
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from "@angular/fire/firestore";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Cliente } from "../modelo/cliente.model";

@Injectable()
export class ClienteServicio{
    clientesColeccion: AngularFirestoreCollection<Cliente>;
    clienteDoc: AngularFirestoreDocument<Cliente> | undefined;
    clientes: Observable<Cliente[]> | undefined;
    cliente: Observable<Cliente> | undefined;

    constructor(private db: AngularFirestore){
        this.clientesColeccion = db.collection('clientes', ref => ref.orderBy('nombre', 'asc'));
    }
    getClientes(): Observable<Cliente[]>{
        //Obtener los clientes
        this.clientes = this.clientesColeccion.snapshotChanges().pipe(
            map(cambios=>{
                return cambios.map(accion=>{
                    const datos =accion.payload.doc.data() as Cliente;
                    datos.id = accion.payload.doc.id;
                    return datos;
                })
            })
        );
        return this.clientes;
    }
}