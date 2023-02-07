import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Projeto } from 'src/app/models/projeto';
import { ProjetosService } from 'src/app/services/projetos.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-edit-projeto',
  templateUrl: './edit-projeto.component.html',
  styleUrls: ['./edit-projeto.component.css']
})
export class EditProjetoComponent implements OnInit {

  public readonly img: string = '/assets/images/add.img.svg';
  public fotoUrl: string = '';

  public isLoadUpload: boolean = false;
  public projeto: Projeto = {
    nome: '',
    site: '',
    foto: '',
    repositorioGit: ''
  }


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private storage: StorageService,
    private projetosService: ProjetosService
  ) { }

  ngOnInit(): void {
    this.initialize();
  }


  public initialize(): void{
    const id: string = this.route.snapshot.paramMap.get('id') as string;
    if(id != undefined){
      this.projetosService.listarPorId(id).subscribe(projeto => {
        this.projeto = projeto;
      });
    }
  }


  public editar(): void{
    this.projetosService.atualizar(this.projeto).subscribe(() => {
      this.router.navigate(['/projetos']);
      alert("Projeto alterado com sucesso!!!");
    })
  }


  public addImg(event: any) {

    this.isLoadUpload = true;
    const file: File = event.target.files[0];
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
