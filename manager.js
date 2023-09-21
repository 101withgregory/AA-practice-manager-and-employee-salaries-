const Employee = require('./employee');

class Manager extends Employee {
  constructor(name, title, salary, manager,employees = []) {
    super(name, title, salary, manager);
    this.employees = employees;
  }

  
  addEmployee(employee) {
    this.employees.push(employee);
  }

  calculateBonus(multiplier) {
    const totalSalary = this.salary + this._totalSubSalary();
    return totalSalary * multiplier;
  }

  _totalSubSalary() {
    let sum = 0;
    for (const employee of this.employees) {
      if (employee instanceof Manager) {
        sum += employee.salary + employee._totalSubSalary();
      } else if (employee instanceof Employee) {
        sum += employee.salary;
      }
    }
    return sum;
  }
}

module.exports = Manager ;
