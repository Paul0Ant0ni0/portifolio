import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-projeto',
  templateUrl: './projeto.component.html',
  styleUrls: ['./projeto.component.css']
})
export class ProjetoComponent implements OnInit {

  public formProjeto!: FormGroup;
  public readonly img: string = '/assets/images/add.img.svg';
  public fotoUrl: string = '';
  public isLoadUpload: boolean = false;

  constructor(
    private storage: StorageService,
    fb: FormBuilder

  ) {
    this.formProjeto = fb.group({
      nome: ['', Validators.required],
      site: ['', Validators.required],
      repositorioGit: ['', Validators.required],
      foto: ['', Validators.required],
    })
   }

  ngOnInit(): void {
  }

  public addImg(event: any): void {
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
