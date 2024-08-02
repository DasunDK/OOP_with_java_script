

// --- Three ---

class Vehicle {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    displayDetails() {
        console.log(`Vehicle class Make: ${this.make}, Model: ${this.model}, Year: ${this.year}`);
    }

}

class Car extends Vehicle {
    constructor(make, model, year, door) {
        super(make, model, year);
        this.door = door;
    }

    displayDetails() {
        super.displayDetails();
        console.log(`door: ${this.door}`);
    }

}


const vehicleObj = new Vehicle('Toyota', 'Corolla', 2020);
const carObj = new Car('Toyota', 'Corolla', 2020, 4);

console.log('\nvehicle details');
vehicleObj.displayDetails();

console.log('\ncar details');
carObj.displayDetails();








