import { Component, OnInit } from '@angular/core';
import { Usuario } from '../model';
import { FormControl } from '@angular/forms';
import { UsuariosService } from '../usuarios.service';
import { MessageService } from 'primeng/api';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuarios-cadastro',
  templateUrl: './usuarios-cadastro.component.html',
  styleUrls: ['./usuarios-cadastro.component.css']
})
export class UsuariosCadastroComponent implements OnInit {
  usuario = new Usuario();

  constructor(
    private usuariosService: UsuariosService,
    private messageService: MessageService,
    private rota: ActivatedRoute
  ) {

  }

  ngOnInit() {
    const { id } = this.rota.snapshot.params;
    if (id) {
      this.carregarusuario(id);
    }
  }

  async carregarusuario(id:number){
    this.usuario = await this.usuariosService.buscarPorCodigo(id);
  }

  async alterar(form: FormControl) {
    try {
      await this.usuariosService.alterar(this.usuario)

      this.messageService.add({
        severity:'success',
        summary:'Edição',
        detail:'Usuário ' + this.usuario.nome + ' alterado'
      });

      form.reset();
    } catch (err) {
      throw err;
    }
  }

  salvar(form: FormControl) {
    if (this.editando) {
      return this.alterar(form);
    }

    return this.inserir(form);
  }

  async inserir(form: FormControl) {
    await this.usuariosService.adicionar(this.usuario)

    this.messageService.add({
      severity:'success',
      summary:'Cadastro',
      detail:'Usuário ' + this.usuario.nome + ' cadastrado'
    });

    form.reset();
  }

  get editando(){
    return Boolean(this.usuario.id);
  }

}
