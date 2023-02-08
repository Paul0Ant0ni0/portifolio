import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class NoticacaoService {

  constructor(private toastr: ToastrService) { }


  public showSuccess(titulo: string, menssagem: string): void{
    this.toastr.success(menssagem, titulo);
  } 

  public showError(titulo: string, menssagem: string): void{
    this.toastr.error(menssagem, titulo);
  }
}
