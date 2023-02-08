import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Contato } from 'src/app/models/contato';
import { EnviarEmailService } from 'src/app/services/enviar-email.service';
import { NoticacaoService } from 'src/app/services/noticacao.service';


@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {

  public formContato!: FormGroup;
  constructor(
    fb: FormBuilder,
    private notificacao: NoticacaoService,
    private enviarEmailService: EnviarEmailService
  ) { 
    this.formContato = fb.group({
      nome: ['', [Validators.required]],
      telefone: ['', [Validators.required]],
      assunto: ['', [Validators.required]],
      email: ['', [Validators.required]],
      mensagem: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
  }


  public enviarEmail(): void {
    if(this.formContato.valid){
      const email: Contato = this.formContato.value;
      this.formContato.setValue({
        nome: '',
        telefone: '',
        assunto: '',
        email: '',
        mensagem: ''
      });
      this.enviarEmailService.enviarEmail(email).subscribe((res) => {
        this.notificacao.showSuccess("Sucesso!!!", "Mensagem enviada!");
        console.log(res)
      });
      
     
      

    }
  }
}
