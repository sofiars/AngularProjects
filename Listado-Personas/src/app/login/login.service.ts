
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class LoginService {

    token: any;

    constructor(private router: Router) { }

    login(email: string, password: string) {
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(
                response => {
                    console.log(response);
                    firebase.auth().currentUser?.getIdToken().then(
                        token => {
                            this.token = token;
                            console.log("token obtenido:" + this.token);
                        }
                    )
                    this.router.navigate(['/']);
                }
            )
    }

    getIdToken() {
        return this.token;
    }

    isAutenticado(){
        return this.token != null;
    }

    logout(){
        firebase.auth().signOut().then(() =>{
            this.token = null;
            console.log("dentro de signout")
            this.router.navigate(['login']);
        }).catch(error => console.log(error));
    }
    
}