import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonagemComponent} from './personagem/personagem.component';
import { PesquisaComponent } from './pesquisa/pesquisa.component'
import { FormsModule} from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import { PesquisaService } from './pesquisa.service';


@NgModule({
  declarations: [
    PersonagemComponent,
    PesquisaComponent
  ],
  imports: [
    CommonModule, 
    FormsModule,
    HttpClientModule
  ], 

  exports:[
    PersonagemComponent,
    PesquisaComponent
  ],

  providers: [
    PesquisaService
  ]
})

export class PesquisaModule { }
