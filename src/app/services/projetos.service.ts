import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable, from, EMPTY } from 'rxjs';
import { Projeto } from '../models/projeto';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProjetosService {

  constructor(
  private firebase: AngularFirestore
  ) { }


  public salvar(projeto: Projeto): Observable<any>{
    const promise = this.firebase.collection("projetos").add(projeto);

    return from(promise).pipe(
      catchError(error => {
        alert("Erro ao salvar o projeto!!!");
        console.error(error);
        return EMPTY;
      })
    )
  }
}
