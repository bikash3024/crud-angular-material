import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-employee-warning-modal',
  templateUrl: './delete-employee-warning-modal.component.html',
  styleUrls: ['./delete-employee-warning-modal.component.scss'],
})
export class DeleteEmployeeWarningModalComponent {
  constructor(
    public dialogRef: MatDialogRef<DeleteEmployeeWarningModalComponent>
  ) {}

  onConfirm(): void {
    this.dialogRef.close(true);
  }

  onCancel(): void {
    this.dialogRef.close(false);
  }
}
