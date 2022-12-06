import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { PopupComponent } from 'src/app/components/popup/popup.component';
import { Auth } from 'src/app/models/auth';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public formLogin: FormGroup;
  public readonly dados = {
    video: '/assets/video/dialog - meme.mp4',
    imagem: '/assets/bg.popup.gif'

  }

  constructor(
    formBuilder: FormBuilder,
    private authService: AuthService,
    private dialogo: MatDialog,

  ) {
    this.formLogin = formBuilder.group({
      email: ['', [Validators.required]],
      senha: ['', [Validators.required]]
    });

  }

  ngOnInit(): void {
  }

  public logar(): void{
    if(this.formLogin.valid){
      const usuario : Auth = this.formLogin.value;
      this.authService.logar(usuario).subscribe(() => {
        alert("Bem vindo(a)!");

      });
      
    }else{
      alert("Dados inválidos!");
      this.popup();
    }
  }

  public popup(): void{
    this.dialogo.open(PopupComponent, {
      width: '700px',
      height: '640px',
      data: this.dados
  })
  }

}
