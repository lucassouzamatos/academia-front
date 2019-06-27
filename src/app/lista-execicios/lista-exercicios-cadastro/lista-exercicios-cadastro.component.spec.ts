import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaExerciciosCadastroComponent } from './lista-exercicios-cadastro.component';

describe('ListaExerciciosCadastroComponent', () => {
  let component: ListaExerciciosCadastroComponent;
  let fixture: ComponentFixture<ListaExerciciosCadastroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaExerciciosCadastroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaExerciciosCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
