import { Component, OnInit } from '@angular/core';
import { Projeto } from 'src/app/models/projeto';
import { tech } from 'src/app/models/tech';
import { ProjetosService } from 'src/app/services/projetos.service';
import { TECH } from 'src/app/shared/material/constants/tech';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public displayedColumns: string[] = ['frontend', 'backend', 'database', 'tools'];
  public dataSource: any[] = [
    { frontend: '/assets/images/techs/angular.svg' },
    { backend: '/assets/images/techs/java.svg' },
    { database: '/assets/images/techs/mysql.svg' },
    { tools: '/assets/images/techs/git.svg' }
  ];

  public fotos: string[] = [];

  constructor(
    private projetosService: ProjetosService
  ) { }

  ngOnInit(): void {
    this.initalizeProjetos();
  }


  public initalizeProjetos(): void {
    this.projetosService.listar().subscribe((projetos: Projeto[]) => {
      const fotos: string[] = projetos.map(function (projeto: Projeto) {
        return projeto.foto;
      })

      this.fotos = fotos;
    

    });
  }
}
