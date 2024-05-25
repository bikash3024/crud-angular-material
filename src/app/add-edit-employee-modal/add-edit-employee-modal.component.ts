import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Employee } from '../shared/app.constants';

@Component({
  selector: 'app-add-edit-employee-modal',
  templateUrl: './add-edit-employee-modal.component.html',
  styleUrls: ['./add-edit-employee-modal.component.scss'],
})
export class AddEditEmployeeModalComponent {
  employeeForm: FormGroup;
  submitted = false;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<AddEditEmployeeModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Employee
  ) {
    this.employeeForm = this.fb.group({
      name: [data?.name || '', Validators.required],
      phone: [
        data?.phone || '',
        [Validators.required, Validators.pattern(/^[0-9]+$/)],
      ],
      email: [data?.email || '', [Validators.required, Validators.email]],
    });
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  onSave(): void {
    this.submitted = true;
    if (this.employeeForm.valid) {
      this.dialogRef.close({ ...this.employeeForm.value, id: this.data?.id });
    }
  }
}
