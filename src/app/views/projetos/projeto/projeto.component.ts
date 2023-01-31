import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Projeto } from 'src/app/models/projeto';


@Component({
  selector: 'app-projeto',
  templateUrl: './projeto.component.html',
  styleUrls: ['./projeto.component.css']
})
export class ProjetoComponent implements OnInit {


  public length: number = 0;
  public pageSize: number = 5;
  public dataSource!: MatTableDataSource<Projeto>;

  constructor() {}

  ngOnInit(): void {
  }

 
}
