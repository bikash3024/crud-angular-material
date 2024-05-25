import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditEmployeeModalComponent } from './add-edit-employee-modal.component';

describe('AddEditEmployeeModalComponent', () => {
  let component: AddEditEmployeeModalComponent;
  let fixture: ComponentFixture<AddEditEmployeeModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddEditEmployeeModalComponent]
    });
    fixture = TestBed.createComponent(AddEditEmployeeModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
