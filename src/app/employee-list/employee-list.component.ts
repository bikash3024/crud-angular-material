import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { EmployeeService } from '../utils/employee.service';
import { AddEditEmployeeModalComponent } from '../add-edit-employee-modal/add-edit-employee-modal.component';
import { Employee } from '../shared/app.constants';
import { DeleteEmployeeWarningModalComponent } from '../delete-employee-warning-modal/delete-employee-warning-modal.component';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss'],
})
export class EmployeeListComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['name', 'phone', 'email', 'actions'];
  dataSource: MatTableDataSource<Employee>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private employeeService: EmployeeService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.loadEmployees();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  private loadEmployees(): void {
    const employees = this.employeeService.getEmployees();
    this.dataSource = new MatTableDataSource(employees);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  openAddEditModal(employee?: Employee): void {
    const dialogRef = this.dialog.open(AddEditEmployeeModalComponent, {
      width: '50%',
      data: employee,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        if (employee) {
          this.employeeService.updateEmployee(result);
        } else {
          this.employeeService.addEmployee(result);
        }
        this.loadEmployees();
      }
    });
  }

  deleteEmployee(id: string): void {
    const dialogRef = this.dialog.open(DeleteEmployeeWarningModalComponent, {
      width: '496px',
      height: 'auto',
      position: {
        top: '10vh',
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.employeeService.deleteEmployee(id);
        this.loadEmployees();
      }
    });
  }
}
