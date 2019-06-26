import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciciosPesquisaComponent } from './exercicios-pesquisa.component';

describe('ExerciciosPesquisaComponent', () => {
  let component: ExerciciosPesquisaComponent;
  let fixture: ComponentFixture<ExerciciosPesquisaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExerciciosPesquisaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExerciciosPesquisaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
