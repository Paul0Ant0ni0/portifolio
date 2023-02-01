import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable, from, EMPTY } from 'rxjs';
import { Projeto } from '../models/projeto';
import { catchError, map } from 'rxjs/operators';
import { FirebaseError } from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class ProjetosService {

  constructor(
  private firebase: AngularFirestore
  ) { }


  public listar(): Observable<any>{
    const promise = this.firebase.collection("projetos").get();

    return from(promise).pipe(
      map((response: any) => {
        return response.docs.map((doc: any) => {
          const projeto: Projeto = doc.data() as Projeto;
          projeto.id = doc.id;
          return projeto;
        })
      }),
      catchError(error => {

        alert("Erro ao listar os projetos");
        console.error(error);
        return EMPTY;
      })
    )
  }

  public listarPorId(id: string): Observable<never | Projeto>{
    const promise = this.firebase.collection("projetos").doc(id).get();

    return from(promise).pipe(
      map((doc: any) => {
        const projeto: Projeto = doc.data() as Projeto;
        projeto.id = doc.id;
        return projeto;
      }),
      catchError(error => {
        alert("Erro ao listar o projeto !!!");
        console.error(error);
        return EMPTY;
      })
    )
  }


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

  public atualizar(projeto: Projeto): Observable<any>{
    const promise = this.firebase.collection("projetos").doc(projeto?.id).update(projeto);

    return from(promise).pipe(
      catchError(error => {
        alert("Erro ao atualizar o projeto!!!");
        console.error(error);
        return EMPTY;
      })
    )
  }

  public deletar(id: string): Observable<any>{
    const promise = this.firebase.collection("projetos").doc(id).delete();

    return from(promise).pipe(
      catchError(error => {
        alert("Erro ao deletar o projeto!!!");
        console.error(error);
        return EMPTY;
      })
    )
  }
}
