import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaExerciciosCadastroComponent } from './lista-exercicios-cadastro/lista-exercicios-cadastro.component';
import { ListaExerciciosPesquisaComponent } from './lista-exercicios-pesquisa/lista-exercicios-pesquisa.component';

@NgModule({
  declarations: [ListaExerciciosCadastroComponent, ListaExerciciosPesquisaComponent],
  imports: [
    CommonModule
  ]
})
export class ListaExeciciosModule { }
