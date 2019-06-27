import { Component, OnInit } from '@angular/core';
import { Exercicio } from '../model';
import { FormControl } from '@angular/forms';
import { ExerciciosService } from '../exercicios.service';
import { MessageService } from 'primeng/api';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-exercicios-cadastro',
  templateUrl: './exercicios-cadastro.component.html',
  styleUrls: ['./exercicios-cadastro.component.css']
})
export class ExerciciosCadastroComponent implements OnInit {
  exercicio = new Exercicio();

  constructor(
    private exerciciosService: ExerciciosService,
    private messageService: MessageService,
    private rota: ActivatedRoute
  ) {

  }

  ngOnInit() {
    const { id } = this.rota.snapshot.params;
    if (id) {
      this.carregarExercicio(id);
    }
  }

  async carregarExercicio(id:number){
    this.exercicio = await this.exerciciosService.buscarPorCodigo(id);
  }

  async alterar(form: FormControl) {
    try {
      await this.exerciciosService.alterar(this.exercicio)

      this.messageService.add({
        severity:'success',
        summary:'Edição',
        detail:'Exercício ' + this.exercicio.nome + ' alterado'
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
    await this.exerciciosService.adicionar(this.exercicio)

    this.messageService.add({
      severity:'success',
      summary:'Cadastro',
      detail:'Exercício ' + this.exercicio.nome + ' cadastrado'
    });

    form.reset();
  }

  get editando(){
    return Boolean(this.exercicio.id);
  }

}
