import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddEditEmployeeModalComponent } from './add-edit-employee-modal/add-edit-employee-modal.component';
import { DeleteEmployeeWarningModalComponent } from './delete-employee-warning-modal/delete-employee-warning-modal.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';

@NgModule({
  declarations: [AppComponent, AddEditEmployeeModalComponent, DeleteEmployeeWarningModalComponent, EmployeeListComponent],
  imports: [BrowserModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
