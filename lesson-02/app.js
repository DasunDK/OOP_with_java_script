// --- One ---

class person {
    constructor(name, age, contry) {
        this.name = name;
        this.age = age;
        this.country = contry;
    }
    show() {
        console.log(this.name, this.age, this.country);
    }
}

const personOne = new person('John', 25, 'sri lanka');
const personTwo = new person('Jane', 22, 'sri lanka');

personOne.show();
personTwo.show();





