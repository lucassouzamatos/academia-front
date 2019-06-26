import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExerciciosCadastroComponent } from './exercicios-cadastro/exercicios-cadastro.component';
import { ExerciciosPesquisaComponent } from './exercicios-pesquisa/exercicios-pesquisa.component';

@NgModule({
  declarations: [ExerciciosCadastroComponent, ExerciciosPesquisaComponent],
  imports: [
    CommonModule
  ]
})
export class ExerciciosModule { }
