import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AchatConfirmationComponent } from './achat-confirmation.component';

describe('AchatConfirmationComponent', () => {
  let component: AchatConfirmationComponent;
  let fixture: ComponentFixture<AchatConfirmationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AchatConfirmationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AchatConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
