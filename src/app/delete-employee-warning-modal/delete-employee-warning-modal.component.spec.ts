import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteEmployeeWarningModalComponent } from './delete-employee-warning-modal.component';

describe('DeleteEmployeeWarningModalComponent', () => {
  let component: DeleteEmployeeWarningModalComponent;
  let fixture: ComponentFixture<DeleteEmployeeWarningModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeleteEmployeeWarningModalComponent]
    });
    fixture = TestBed.createComponent(DeleteEmployeeWarningModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
