import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { catchError, EMPTY, from, Observable } from 'rxjs';
import { Auth } from '../models/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private firebaseAuth: AngularFireAuth
  ) { }


  public logar(usuario: Auth): Observable<any>{
    const {email, senha} = usuario;
    const promise = this.firebaseAuth.signInWithEmailAndPassword(email, senha);

    return from(promise)
  }
  

}
