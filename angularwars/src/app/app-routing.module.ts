import { PesquisaComponent } from './pesquisa/pesquisa/pesquisa.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import { ErroComponent } from './erro/erro.component';
//import { HomeComponent } from './home/home.component';

const routes: Routes = [
  //{path: 'inicio', component: HomeComponent},
  {path: 'pesquisa-personagem', component: PesquisaComponent},
  {path: '', redirectTo: '/inicio', pathMatch: 'full'}
  //{path: '**', component: ErroComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }