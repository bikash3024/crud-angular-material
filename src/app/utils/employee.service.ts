import { Injectable } from '@angular/core';
import { Employee, INITIAL_SAMPLE_DATA } from '../shared/app.constants';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  private localStorageKey = 'employees';

  constructor() {
    this.loadInitialData();
  }
  private loadInitialData(): void {
    const employees = localStorage.getItem(this.localStorageKey);
    if (!employees) {
      this.saveEmployees(INITIAL_SAMPLE_DATA);
    }
  }
  getEmployees(): Employee[] {
    const employees = localStorage.getItem(this.localStorageKey);
    return employees ? JSON.parse(employees) : [];
  }

  saveEmployees(employees: Employee[]): void {
    localStorage.setItem(this.localStorageKey, JSON.stringify(employees));
  }

  addEmployee(employee: Employee): void {
    const employees = this.getEmployees();
    employee.id = '' + new Date().getTime(); // simplistic unique ID generation
    employees.push(employee);
    this.saveEmployees(employees);
  }

  updateEmployee(employee: Employee): void {
    const employees = this.getEmployees();
    const index = employees.findIndex((e) => e.id === employee.id);
    if (index !== -1) {
      employees[index] = employee;
      this.saveEmployees(employees);
    }
  }

  deleteEmployee(id: string): void {
    const employees = this.getEmployees();
    const updatedEmployees = employees.filter((e) => e.id !== id);
    this.saveEmployees(updatedEmployees);
  }


}
