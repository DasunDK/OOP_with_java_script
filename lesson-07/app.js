


// --- Six ---

class Employee {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
        console.log(`Employee: ${this.name}, Salary: Rs.${this.salary}`);
    }

    annualSalary() {
        return this.salary * 12;
    }
}
class Manager extends Employee {
    constructor(name, salary, department) {
        super(name, salary);
        this.department = department;
    }
    annualSalary() {
        const annualSalary = super.annualSalary();
        const bonus = this.department === 'HR' ? 0.1 : 0.2;
        return (annualSalary * bonus) + annualSalary;
    }
}

const managerOne = new Manager('Dasun Kumara', 150000, 'HR');
console.log(managerOne.annualSalary());

const managerTwo = new Manager('Kavinda NWN', 200000, 'IT');
console.log(managerTwo.annualSalary());







