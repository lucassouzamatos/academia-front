import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { ListaExerciciosService } from './lista-exercicios.service';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { TableModule } from "primeng/table";
import { TooltipModule } from 'primeng/tooltip';
import { ConfirmDialogModule } from 'primeng/confirmdialog';

import { CommonModule } from '@angular/common';
import { ListaExerciciosCadastroComponent } from './lista-exercicios-cadastro/lista-exercicios-cadastro.component';
import { ListaExerciciosPesquisaComponent } from './lista-exercicios-pesquisa/lista-exercicios-pesquisa.component';
import { InputTextModule } from 'primeng/inputtext';
import { PickListModule } from 'primeng/picklist';
import { DropdownModule } from 'primeng/dropdown';

@NgModule({
  declarations: [ListaExerciciosCadastroComponent, ListaExerciciosPesquisaComponent],
  imports: [
    CommonModule,
    FormsModule,
    ToastModule,
    InputTextModule,
    PickListModule,
    ButtonModule,
    DropdownModule,
    BrowserModule,
    RouterModule,
    TableModule,
    TooltipModule,
    ConfirmDialogModule,
  ],
  providers: [
    ListaExerciciosService
  ],
  exports: [
    ListaExerciciosCadastroComponent,
    ListaExerciciosPesquisaComponent
  ]
})
export class ListaExerciciosModule { }
