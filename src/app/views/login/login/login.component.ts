import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { FirebaseError } from 'firebase/app';
import { catchError } from 'rxjs';
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
    private router: Router

  ) {
    this.formLogin = formBuilder.group({
      email: ['', [Validators.required]],
      senha: ['', [Validators.required]]
    });

  }

  ngOnInit(): void {
  }

  public logar(): void {
    if (this.formLogin.valid) {
      const usuario: Auth = this.formLogin.value;
      this.authService.logar(usuario).subscribe(
        () => {
          alert("Bem vindo(a)!");
          this.router.navigate(["/projeto"])
        },
        (error: FirebaseError) => {
          this.popup();
          
          if (error.code == "auth/user-not-found" ||
           error.code == "auth/invalid-email") {
            console.error("Usuário ou senha inválido")
          }

       }


      );

    } else {
      alert("Dados inválidos!");

    }
  }

  public popup(): void {
    this.dialogo.open(PopupComponent, {
      width: '700px',
      height: '640px',
      data: this.dados
    })
  }

}
