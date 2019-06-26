import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuariosCadastroComponent } from './usuarios-cadastro/usuarios-cadastro.component';
import { UsuariosPesquisaComponent } from './usuarios-pesquisa/usuarios-pesquisa.component';

@NgModule({
  declarations: [UsuariosCadastroComponent, UsuariosPesquisaComponent],
  imports: [
    CommonModule
  ]
})
export class UsuariosModule { }
