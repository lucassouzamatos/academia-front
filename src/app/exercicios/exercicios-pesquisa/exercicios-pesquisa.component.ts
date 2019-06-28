import { Component, OnInit } from '@angular/core';
import { MessageService, ConfirmationService } from 'primeng/api';

import { ExerciciosService } from '../exercicios.service';

@Component({
  selector: 'app-exercicios-pesquisa',
  templateUrl: './exercicios-pesquisa.component.html',
  styleUrls: ['./exercicios-pesquisa.component.css']
})
export class ExerciciosPesquisaComponent implements OnInit {
  exercicios = [];
  filtro: string;

  constructor(
    private exerciciosService: ExerciciosService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService
  ) { }

  ngOnInit() {
    this.pesquisar();
  }

  pesquisar() {
    this.exerciciosService.pesquisar(this.filtro).then(data => this.exercicios = data)
  }

  excluir(usuario: any) {
    this.confirmationService.confirm({
      message: 'Tem certeza que deseja excluir esse registro?',
      accept: () => {
        this.exerciciosService.excluir(usuario.id).then(() => {
          this.pesquisar();
          this.messageService.add({ severity:'success', summary:'Exercício excluído', detail: 'Exercício excluído com sucesso' })
        });
      }
    });
  }
}
