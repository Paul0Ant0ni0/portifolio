import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Projeto } from 'src/app/models/projeto';
import { ProjetosService } from 'src/app/services/projetos.service';


@Component({
  selector: 'app-projeto',
  templateUrl: './projeto.component.html',
  styleUrls: ['./projeto.component.css']
})
export class ProjetoComponent implements OnInit {

  public projetoList: Projeto[] = [];
  public length: number = 0;
  public pageSize: number = 5;
  public dataSource!: MatTableDataSource<Projeto>;

  constructor(
    private projetosService: ProjetosService,

  ) {}

  ngOnInit(): void {
    this.listarProjeto();
  }

  public listarProjeto(): void{
    this.projetosService.listar().subscribe(projetos => {
      this.projetoList = projetos;
    });

  }

  public deletar(id: string | undefined): void{

      const respt: boolean = confirm("Deseja deletar este projeto?");
      if(respt == true && id != undefined){
        this.projetosService.deletar(id).subscribe(() => {
          this.listarProjeto()
          alert("Projeto deletado com sucesso!!!")
        })
        }
      }
    
  
 
}
