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
  public readonly BASE_URL: string = "https://portifolio-back-end-production-10e6.up.railway.app/send-email"; // Endpoint

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
          </head>

          <body style="background-image: url(https://lh3.googleusercontent.com/drive-viewer/AAOQEOTv5R8D5xnLURMG8mM4ikIIAqYp3L0LmjBj-u6MnkUbZ94Vegc3RTTwQbVsIoYCGUMD3qoB3F1oU1Cj4cXbj7Gc3ebhHA=w1920-h902); background-repeat: no-repeat;
            background-size: cover; display: flex; flex-direction: column; justify-content:center; align-items: center;
            margin: 0; padding: 25px; font-family: Arial, Helvetica, sans-serif; box-sizing: border-box;">
            <div style="background-color: white; width: 85%; box-shadow:  1px 1px 6px 7px rgba(79, 79, 79, 0.13); padding: 25px;
            border-radius: 8px; font-size: 19px; display:flex; flex-direction: row; margin-top: 100px; height: auto; border: 1px solid rgb(109, 109, 109);">
            
             
                  <section style="width: 75%;">
                      <div class="card-body">
                          <p><b>Nome:</b> ${contato.nome}</p>
                          <p><b>Email:</b> ${contato.email}</p>
                          <p><b>Assunto:</b>  ${contato.assunto} </p>

                          <p style="text-align:justify; color: rgb(126, 126, 126); width: 65%">${contato.mensagem}</p>
                          

                      </div>
                  </section>
                  <section style="width: 68%; background-image: url(https://lh3.googleusercontent.com/drive-viewer/AAOQEOSMHJnpLVTMy3np6y_Ls2-8izyZwRIiyttwVNJqnLQqBG2M-PEGjiOCTd6yru9kc72Fj-O2n5gMwFxKAg6TpKZuvO71zQ=w1920-h902); background-position: center;
                  background-repeat: no-repeat; background-size: 100% 100%; display: flex; justify-content: end; align-items: start;">
                     <a href="https://wa.me/${contato.telefone}" style="background-image: url(https://lh3.googleusercontent.com/drive-viewer/AAOQEORXEq79U5xit0bl10Jql4yY-mgaehLn2wBUX8DfWRrl6aRwWjTz9vFt5-vq1Rb6_7iyPv92nvgoFfNBM79OBotXbtCPnA=w1920-h902);
                     background-position: center  bottom 0.1px; background-repeat: no-repeat; border-radius: 8px; width: 5%;
                        padding: 25px 20px; border: 1px solid black; margin: 8px;"></a>
                 </section>
                
              </div>

          </body>

          </html>
      `
    }


    return this.http.post<Contato>(`${this.BASE_URL}`, email).pipe(
      catchError(error => {
        this.notificacao.showError("ERRO!!!", "Erro ao enviar o e-mail.");
        console.error(error);
        return EMPTY;
      })
    )

  }

}
