import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmacaoExclusaoModalComponent } from './confirmacao-exclusao-modal.component';

describe('ConfirmacaoExclusaoModalComponent', () => {
  let component: ConfirmacaoExclusaoModalComponent;
  let fixture: ComponentFixture<ConfirmacaoExclusaoModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConfirmacaoExclusaoModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConfirmacaoExclusaoModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
