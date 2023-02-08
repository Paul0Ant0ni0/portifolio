import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, EMPTY, Observable } from 'rxjs';
import { Contato } from '../models/contato';
import { Email } from '../models/email';
import { NoticacaoService } from './noticacao.service';


@Injectable({
  providedIn: 'root'
})
export class EnviarEmailService {
  public readonly BASE_URL: string = "http://localhost:3000/send-email"; // Endpoint



  constructor(
    private http: HttpClient,
    private notificacao: NoticacaoService,
  ) { }


  public enviarEmail(contato: Contato): Observable<Contato> {
    const email: Email = {
      email: contato.email,
      subject: contato.assunto,
      text: contato.assunto,
      html: `
      <!DOCTYPE html>
        <html lang="pt-BR">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Email</title>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" crossorigin="anonymous"></script>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
        </head>
        <body style="background-image: url('https://i.imgur.com/bQXEYGE.png'); background-repeat: no-repeat; background-size: cover; display: flex; flex-direction: column; align-items: center; margin: 0">
            <div class="card" style="width: 45rem;">
          <section class="double-width" style="display: flex; flex-direction: row; justify-content: space-between; align-items: center;">
            <img src="blob:https://imgur.com/d12e26fc-1c09-4861-b897-04ce7903e785" class="card-img-top" alt="Email"  >
          </section>
          <div>
            <section class="double-width">
              <div class="card-body" >
                <h5 class="card-title">Nome: ${contato.nome}</h5>
                <h5 class="card-title">Email: ${contato.email}</h5>
                <h5 class="card-title">Assunto: ${contato.assunto}</h5>
            
                <p class="card-text">${contato.mensagem}</p>
              </div>
            </section>

          </div>
          <a href="https://wa.me/${contato.telefone}" style="background-image: url('https://i.imgur.com/Pjgxm65.png'); background-position: center; background-repeat: no-repeat; border-radius: 8px; width: 25%;
          padding: 20px 45px; border: 1px solid black; margin: 8px;"></a>
        </div>
        </body>
        </html>
      `
    }


    return this.http.post<Contato>(`${this.BASE_URL}`, email).pipe(
      catchError(error => {
        this.notificacao.showError("ERRO!!!", "Erro ao criar novo cliente.");
        console.error(error);
        return EMPTY;
      })
    )

  }

}
