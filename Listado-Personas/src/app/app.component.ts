import { Component, OnInit } from '@angular/core';
import firebase from "firebase/app";
import "firebase/firestore";
import { LoggingService } from './LoggingService.service';
import { LoginService } from './login/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  titulo = 'Listado de Personas';

  constructor (private loginService:LoginService){}
  
  ngOnInit(): void {
    firebase.initializeApp({
      apiKey: "AIzaSyBBHAMOfGz3EH3QBLk6C8Luc3qb5q1XWgk",
      authDomain: "listado-personas-cc80e.firebaseapp.com"
    })
   }
  
  isAutenticado(){
    return this.loginService.isAutenticado();
  }

   salir(){
     this.loginService.logout();
   }
  
}
