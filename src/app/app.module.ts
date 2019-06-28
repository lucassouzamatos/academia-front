import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { ButtonModule } from 'primeng/button';
import { SidebarModule } from 'primeng/sidebar';

import { AppComponent } from './app.component';

import { UsuariosModule } from './usuarios/usuarios.module';
import { UsuariosPesquisaComponent } from './usuarios/usuarios-pesquisa/usuarios-pesquisa.component';
import { UsuariosCadastroComponent } from './usuarios/usuarios-cadastro/usuarios-cadastro.component';

import { ExerciciosModule } from './exercicios/exercicios.module';
import { ExerciciosPesquisaComponent } from './exercicios/exercicios-pesquisa/exercicios-pesquisa.component';
import { ExerciciosCadastroComponent } from './exercicios/exercicios-cadastro/exercicios-cadastro.component';

import { ListaExerciciosModule } from './lista-exercicios/lista-exercicios.module';
import { ListaExerciciosPesquisaComponent } from './lista-exercicios/lista-exercicios-pesquisa/lista-exercicios-pesquisa.component';
import { ListaExerciciosCadastroComponent } from './lista-exercicios/lista-exercicios-cadastro/lista-exercicios-cadastro.component';

import { MessageService, ConfirmationService } from 'primeng/api';

const routes: Routes = [
  { path: '', redirectTo: 'usuarios', pathMatch:'full' },
  { path: 'usuarios', component: UsuariosPesquisaComponent },
  { path: 'usuarios/novo', component: UsuariosCadastroComponent },
  { path: 'usuarios/:id', component: UsuariosCadastroComponent },
  { path: 'exercicios', component: ExerciciosPesquisaComponent },
  { path: 'exercicios/novo', component: ExerciciosCadastroComponent },
  { path: 'exercicios/:id', component: ExerciciosCadastroComponent },
  { path: 'lista-exercicios', component: ListaExerciciosPesquisaComponent },
  { path: 'lista-exercicios/novo', component: ListaExerciciosCadastroComponent },
  { path: 'lista-exercicios/:id', component: ListaExerciciosCadastroComponent },
]

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ButtonModule,
    SidebarModule,
    BrowserAnimationsModule,
    HttpClientModule,

    UsuariosModule,
    ExerciciosModule,
    ListaExerciciosModule,

    RouterModule.forRoot(routes)
  ],
  providers: [
    MessageService,
    ConfirmationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
