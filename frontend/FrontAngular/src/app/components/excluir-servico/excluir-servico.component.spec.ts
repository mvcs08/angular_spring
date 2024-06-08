import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcluirServicoComponent } from './excluir-servico.component';

describe('ExcluirServicoComponent', () => {
  let component: ExcluirServicoComponent;
  let fixture: ComponentFixture<ExcluirServicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExcluirServicoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExcluirServicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
