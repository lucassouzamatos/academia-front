import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Exercicio } from './model';

@Injectable({
  providedIn: 'root'
})
export class ExerciciosService {
  exerciciosUrl = 'http://localhost:8080/exercicios';

  constructor(private service: HttpClient) { }

  pesquisar(filtro?: any) {
    if (filtro) {
      return this.service.get<any>(this.exerciciosUrl + "/busca?nome=" + filtro).toPromise();
    }

    return this.service.get<any>(this.exerciciosUrl).toPromise();
  }

  excluir(id: number): Promise<void> {
    return this.service.delete<any>(`${this.exerciciosUrl}/${id}`).toPromise();
  }

  adicionar(exercicio: Exercicio) :Promise<any> {
    return this.service.post(this.exerciciosUrl, exercicio).toPromise();
  }

  alterar(exercicio: Exercicio): Promise<any> {
    return this.service.put(this.exerciciosUrl + '/' + exercicio.id, exercicio)
      .toPromise();
  }

  buscarPorCodigo(codigo: number): Promise<Exercicio> {
    return this.service.get<Exercicio>(this.exerciciosUrl + '/' + codigo).toPromise();
  }
}
