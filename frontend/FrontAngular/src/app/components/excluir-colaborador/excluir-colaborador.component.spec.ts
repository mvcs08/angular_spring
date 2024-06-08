import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcluirColaboradorComponent } from './excluir-colaborador.component';

describe('ExcluirColaboradorComponent', () => {
  let component: ExcluirColaboradorComponent;
  let fixture: ComponentFixture<ExcluirColaboradorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExcluirColaboradorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExcluirColaboradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
