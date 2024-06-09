import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarEditarColaboradorComponent } from './cadastrar-editar-colaborador.component';

describe('CadastrarEditarColaboradorComponent', () => {
  let component: CadastrarEditarColaboradorComponent;
  let fixture: ComponentFixture<CadastrarEditarColaboradorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CadastrarEditarColaboradorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CadastrarEditarColaboradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
