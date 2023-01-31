import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Projeto } from 'src/app/models/projeto';
import { ProjetosService } from 'src/app/services/projetos.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-novo-projeto',
  templateUrl: './novo-projeto.component.html',
  styleUrls: ['./novo-projeto.component.css']
})
export class NovoProjetoComponent implements OnInit {

  public formProjeto!: FormGroup;
  public readonly img: string = '/assets/images/add.img.svg';
  public fotoUrl: string = '';

  public isLoadUpload: boolean = false;

  constructor(
    private storage: StorageService,
    private projetoService: ProjetosService,
    fb: FormBuilder

  ) {
    this.formProjeto = fb.group({
      nome: ['', Validators.required],
      site: ['', Validators.required],
      repositorioGit: ['', Validators.required],
      foto: ['']
    })
   }

  ngOnInit(): void {
  }

  public salvar(): void{
    const projeto: Projeto = this.formProjeto.value;
    projeto.foto = this.fotoUrl;

    if(this.formProjeto.valid){
      this.projetoService.salvar(projeto).subscribe(() => {
        alert("Projeto cadastrado com sucesso!!!")
      });
    }else{
      alert("Dados inválido!!!")
    }
  }

  public addImg(event: any) {

    this.isLoadUpload = true;
    const file: File = event.target.files[0]
    this.storage.adicionarImagem(file).subscribe(urlImage => {
      this.isLoadUpload = false;
      const storageReference = urlImage.ref;
      const promiseFileUrl = storageReference.getDownloadURL(); 
      promiseFileUrl.then((fotoUrl: string) => { 
        this.fotoUrl = fotoUrl;
       
      })

    })

 
  }
}
