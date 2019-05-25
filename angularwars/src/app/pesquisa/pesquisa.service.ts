import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PesquisaService {

  constructor(private httpClient: HttpClient) { 
   


  }

  pesquisa(nome: string){
    return this.httpClient.get(environment.api + "/people?search=" + nome)
  }

  get(url: string){
    return this.httpClient.get(url);
  }
}
