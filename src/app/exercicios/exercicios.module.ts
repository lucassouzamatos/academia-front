import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { InputTextModule } from "primeng/inputtext";
import { PickListModule } from 'primeng/picklist';
import { ButtonModule } from "primeng/button";
import { TableModule } from "primeng/table";
import { TooltipModule } from 'primeng/tooltip';
import { ToastModule } from 'primeng/toast';
import { ConfirmDialogModule } from 'primeng/confirmdialog';

import { ExerciciosCadastroComponent } from './exercicios-cadastro/exercicios-cadastro.component';
import { ExerciciosPesquisaComponent } from './exercicios-pesquisa/exercicios-pesquisa.component';
import { ExerciciosService } from './exercicios.service';

@NgModule({
  declarations: [ExerciciosCadastroComponent, ExerciciosPesquisaComponent],
  imports: [
    CommonModule,
    BrowserModule,
    InputTextModule,
    ButtonModule,
    TableModule,
    TooltipModule,
    ToastModule,
    ConfirmDialogModule,
    FormsModule,
    RouterModule,
    PickListModule
  ],
  providers: [
    ExerciciosService
  ],
  exports: [
    ExerciciosCadastroComponent,
    ExerciciosPesquisaComponent
  ]
})
export class ExerciciosModule { }
