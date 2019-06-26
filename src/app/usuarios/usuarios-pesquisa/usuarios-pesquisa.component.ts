import { Component, OnInit } from '@angular/core';
import { MessageService, ConfirmationService } from 'primeng/api';

import { UsuariosService } from '../usuarios.service';

@Component({
  selector: 'app-usuarios-pesquisa',
  templateUrl: './usuarios-pesquisa.component.html',
  styleUrls: ['./usuarios-pesquisa.component.css']
})
export class UsuariosPesquisaComponent implements OnInit {
  usuarios = [];
  filtro: string;

  constructor(
    private usuariosService: UsuariosService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService
  ) { }

  ngOnInit() {
    this.pesquisar();
  }

  pesquisar() {
    this.usuariosService.pesquisar(this.filtro).then(data => this.usuarios = data)
  }

  excluir(usuario: any) {
    this.confirmationService.confirm({
      message: 'Tem certeza que deseja excluir esse registro?',
      accept: () => {
        this.usuariosService.excluir(usuario.id).then(() => {
          this.pesquisar();
          this.messageService.add({ severity:'success', summary:'Usuário excluído', detail: 'usuario excluído com sucesso' })
        });
      }
    });
  }
}
