import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() {}

  getEmployees() {
    return [
      {"id": 1, "name": "Glen", "age": 31},
      {"id": 2, "name": "Glen2", "age": 32},
      {"id": 3, "name": "Glen3", "age": 33}
    ];
  }
}
