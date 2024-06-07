import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarEditarFornecedorComponent } from './cadastrar-editar-fornecedor.component';

describe('CadastrarEditarFornecedorComponent', () => {
  let component: CadastrarEditarFornecedorComponent;
  let fixture: ComponentFixture<CadastrarEditarFornecedorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CadastrarEditarFornecedorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastrarEditarFornecedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
