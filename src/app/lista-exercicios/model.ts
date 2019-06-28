export class Usuario {
  id: number;
  nome: string;
  sexo: string;
  idade: number;
}
export class Exercicio {
  id: number;
  nome: string;
  repeticoes: number;
  carga: number;
}

export class ListaExercicio {
  id: number;
  usuario = new Usuario();
  exercicios: Exercicio[] = [];
}
