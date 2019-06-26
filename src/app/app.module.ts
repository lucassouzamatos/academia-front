import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ButtonModule } from 'primeng/button';
import { SidebarModule } from 'primeng/sidebar';

import { AppComponent } from './app.component';

import { UsuariosModule } from './usuarios/usuarios.module';
import { UsuariosPesquisaComponent } from './usuarios/usuarios-pesquisa/usuarios-pesquisa.component';
import { UsuariosCadastroComponent } from './usuarios/usuarios-cadastro/usuarios-cadastro.component';

import { ExerciciosModule } from './exercicios/exercicios.module';
import { ExerciciosPesquisaComponent } from './exercicios/exercicios-pesquisa/exercicios-pesquisa.component';
import { ExerciciosCadastroComponent } from './exercicios/exercicios-cadastro/exercicios-cadastro.component';

const routes: Routes = [
  { path: '', redirectTo: 'usuarios', pathMatch:'full' },
  { path: 'usuarios', component: UsuariosPesquisaComponent },
  { path: 'usuarios/novo', component: UsuariosCadastroComponent },
  { path: 'exercicios', component: ExerciciosPesquisaComponent },
  { path: 'exercicios/novo', component: ExerciciosCadastroComponent }
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

    UsuariosModule,
    ExerciciosModule,

    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
