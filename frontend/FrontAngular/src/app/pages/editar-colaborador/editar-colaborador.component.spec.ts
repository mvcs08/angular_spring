import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarColaboradorComponent } from './editar-colaborador.component';

describe('EditarColaboradorComponent', () => {
  let component: EditarColaboradorComponent;
  let fixture: ComponentFixture<EditarColaboradorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditarColaboradorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditarColaboradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
