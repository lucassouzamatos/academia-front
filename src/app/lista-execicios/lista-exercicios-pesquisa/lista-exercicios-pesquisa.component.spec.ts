import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaExerciciosPesquisaComponent } from './lista-exercicios-pesquisa.component';

describe('ListaExerciciosPesquisaComponent', () => {
  let component: ListaExerciciosPesquisaComponent;
  let fixture: ComponentFixture<ListaExerciciosPesquisaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaExerciciosPesquisaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaExerciciosPesquisaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
