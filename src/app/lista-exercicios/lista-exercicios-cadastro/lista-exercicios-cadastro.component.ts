import { FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ListaExerciciosService } from '../lista-exercicios.service';
import { ListaExercicio } from '../model';
import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';

import { Exercicio } from './../../exercicios/model';

@Component({
  selector: 'app-lista-exercicios-cadastro',
  templateUrl: './lista-exercicios-cadastro.component.html',
  styleUrls: ['./lista-exercicios-cadastro.component.css']
})
export class ListaExerciciosCadastroComponent implements OnInit {

  listaExercicios = new ListaExercicio();
  exercicios: Exercicio[];
  usuarios = [];

  constructor(
    private service: ListaExerciciosService,
    private messageService: MessageService,
    private rota: ActivatedRoute
  ) { }

  ngOnInit() {
    this.pesquisarUsuarios();
    this.pesquisarExercicios();
    const codigoLista = this.rota.snapshot.params['id'];
    if (codigoLista){
      this.carregarLista(codigoLista);
    }
  }

  carregarLista(id:number){
    this.service.buscarPorCodigo(id)
      .then((data) => {
        this.listaExercicios = data;
      }
    );
  }

  inserir(form: FormControl) {
    this.service.adicionar(this.listaExercicios)
    .then( ()=>{
      this.messageService.add({
        severity: 'success',
        summary: 'Cadastro',
        detail: `Lista de exercícios cadastrada`
      });
      form.reset();
    });
  }

  alterar(form: FormControl) {
    this.service.alterar(this.listaExercicios)
    .then(() => {
      this.messageService.add({
        severity: 'success',
        summary: 'Edição',
        detail: `Lista de exercícios alterada`
      });

      form.reset();
    });
  }

  salvar(form: FormControl) {
    if (this.editando) {
      this.alterar(form);
    } else {
      this.inserir(form);
    }
  }

  get editando(){
    return Boolean(this.listaExercicios.id);
  }

  pesquisarExercicios(){
    this.service.listarExercicios()
    .then((dados)=>{
      this.exercicios = dados;
    });
  }

  pesquisarUsuarios(){
    this.service.listarUsuarios()
    .then((dados)=>{
      this.usuarios = dados.map(dado =>
        ({ label: dado.nome, value: dado.id })
      );
    });
  }
}
