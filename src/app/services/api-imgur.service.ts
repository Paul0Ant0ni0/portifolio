import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, EMPTY, from, Observable, tap } from 'rxjs';
import { NoticacaoService } from './noticacao.service';


@Injectable({
  providedIn: 'root'
})
export class ApiImgurService {
  public readonly CLIENT_ID: string = '51524480c55ef36';
  public readonly BASE_URL: string = 'https://api.imgur.com/3/imagem';


  constructor(
    private http: HttpClient,
    private notificacao: NoticacaoService
  ) { }

  public enviarImagem(img: File):Observable<any>{

    return this.http.post(this.BASE_URL, img).pipe(
      tap(text => {
        console.log(text);
      }),
      catchError((error: HttpErrorResponse) => {
        this.notificacao.showError("ERRO!!!", "Erro ao salvar a imagem.");
        console.error(error.statusText);
        return EMPTY;
      })
      );
  }
}
