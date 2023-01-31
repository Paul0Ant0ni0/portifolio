import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { catchError, EMPTY, from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(
    private storage: AngularFireStorage
  ) { }

  public adicionarImagem(img: File):Observable<any>{
    const promise = this.storage.upload(`fotos/${Date.now()}`, img);

    return from(promise).pipe(
      catchError(error => {
        alert("Erro ao fazer upload da imagem");
        console.error(error);
        return EMPTY;
      })
    )


  }
}
