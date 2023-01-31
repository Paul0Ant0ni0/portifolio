import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-projeto',
  templateUrl: './projeto.component.html',
  styleUrls: ['./projeto.component.css']
})
export class ProjetoComponent implements OnInit {

  public readonly img: string = '/assets/images/add.img.svg';
  public fotoUrl: string = '';
  public isLoadUpload: boolean = false;

  constructor(
    private storage: StorageService
  ) { }

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
