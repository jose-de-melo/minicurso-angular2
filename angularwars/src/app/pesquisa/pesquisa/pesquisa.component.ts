import { Observable } from 'rxjs';

import { Component, OnInit } from '@angular/core';
import { PesquisaService } from '../pesquisa.service';

@Component({
  selector: 'app-pesquisa',
  templateUrl: './pesquisa.component.html',
  styleUrls: ['./pesquisa.component.css']
})
export class PesquisaComponent implements OnInit {

  campo :string = "luk";

  resultado: any[];
  anterior: any;
  proxima: any;

  constructor(private pesquisaService: PesquisaService) { }

  ngOnInit() {
  }

  onPesquisar(){
    this.pesquisaService.pesquisa(this.campo).subscribe(
      resposta => {
        this.resultado = resposta['results'] ;
        this.anterior = resposta['previous'];
        this.proxima = resposta['next'];
        console.log(this.resultado);
      }
    );
  }

  paginaAnterior(){
    this.pesquisaService.get(this.anterior).subscribe(
      resposta => {
        this.resultado = resposta['results'] ;
        this.anterior = resposta['previous'];
        this.proxima = resposta['next'];
        console.log(this.resultado);
    });
  }

  paginaProxima(){
    this.pesquisaService.get(this.proxima).subscribe(
      resposta => {
        this.resultado = resposta['results'] ;
        this.anterior = resposta['previous'];
        this.proxima = resposta['next'];
        console.log(this.resultado);
    });
  }

}