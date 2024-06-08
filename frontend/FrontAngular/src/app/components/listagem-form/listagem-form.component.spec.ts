import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListagemFormComponent } from './listagem-form.component';

describe('ListagemFormComponent', () => {
  let component: ListagemFormComponent;
  let fixture: ComponentFixture<ListagemFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListagemFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListagemFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
