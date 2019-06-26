import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from './model';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  usuariosUrl = 'http://localhost:8080/usuarios';

  constructor(private service: HttpClient) { }

  pesquisar(filtro?: any) {
    if (filtro) {
      return this.service.get<any>(this.usuariosUrl + "/busca?nome=" + filtro).toPromise();
    }

    return this.service.get<any>(this.usuariosUrl).toPromise();
  }

  excluir(id: number): Promise<void> {
    return this.service.delete<any>(`${this.usuariosUrl}/${id}`).toPromise();
  }

  adicionar(cat: Usuario) :Promise<any> {
    return this.service.post(this.usuariosUrl, cat).toPromise();
  }

  alterar(usuario: Usuario): Promise<any> {
    return this.service.put(this.usuariosUrl + '/' + usuario.id, usuario)
    .toPromise();
  }

  buscarPorCodigo(codigo: number): Promise<Usuario> {
    return this.service.get<Usuario>(this.usuariosUrl + '/' + codigo).toPromise();
  }
}
