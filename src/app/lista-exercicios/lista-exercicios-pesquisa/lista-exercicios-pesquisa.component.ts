import { Component, OnInit } from '@angular/core';
import { MessageService, ConfirmationService } from 'primeng/api';

import { ListaExerciciosService } from '../lista-exercicios.service';

@Component({
  selector: 'app-lista-exercicios-pesquisa',
  templateUrl: './lista-exercicios-pesquisa.component.html',
  styleUrls: ['./lista-exercicios-pesquisa.component.css']
})
export class ListaExerciciosPesquisaComponent implements OnInit {
  listaExercicios = [];
  filtro: string;

  constructor(
    private listaExerciciosService: ListaExerciciosService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService
  ) { }

  ngOnInit() {
    this.pesquisar();
  }

  pesquisar() {
    this.listaExerciciosService.pesquisar(this.filtro).then(data => this.listaExercicios = data)
  }

  excluir(usuario: any) {
    this.confirmationService.confirm({
      message: 'Tem certeza que deseja excluir esse registro?',
      accept: () => {
        this.listaExerciciosService.excluir(usuario.id).then(() => {
          this.pesquisar();
          this.messageService.add({ severity:'success', summary:'Lista excluída', detail: 'Lista excluída com sucesso' })
        });
      }
    });
  }
}
