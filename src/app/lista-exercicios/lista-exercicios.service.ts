import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ListaExercicio } from './model';

@Injectable({
  providedIn: 'root'
})
export class ListaExerciciosService {
  ListaExerciciosUrl = 'http://localhost:8080/lista-exercicios';

  constructor(private service: HttpClient) { }

  pesquisar(filtro?: any) {
    if (filtro) {
      return this.service.get<any>(this.ListaExerciciosUrl + "/busca?nome=" + filtro).toPromise();
    }

    return this.service.get<any>(this.ListaExerciciosUrl).toPromise();
  }

  excluir(id: number): Promise<void> {
    return this.service.delete<any>(`${this.ListaExerciciosUrl}/${id}`).toPromise();
  }

  adicionar(ListaExercicio: ListaExercicio) :Promise<any> {
    return this.service.post(this.ListaExerciciosUrl, ListaExercicio).toPromise();
  }

  alterar(ListaExercicio: ListaExercicio): Promise<any> {
    return this.service.put(this.ListaExerciciosUrl + '/' + ListaExercicio.id, ListaExercicio)
      .toPromise();
  }

  buscarPorCodigo(codigo: number): Promise<ListaExercicio> {
    return this.service.get<ListaExercicio>(this.ListaExerciciosUrl + '/' + codigo).toPromise();
  }

  listarExercicios(): Promise<any> {
    return this.service.get<any>('http://localhost:8080/exercicios').toPromise();
  }

  listarUsuarios(): Promise<any> {
    return this.service.get<any>('http://localhost:8080/alunos').toPromise();
  }
}
