// --- seven --- 

class Animal {
    constructor(species, sound) {
        this.species = species;
        this.sound = sound;
    }

    makeSound() {
        console.log(`sound: ${this.sound}`);
    }
}

class Dog extends Animal {
    constructor(species, sound, color) {
        super(species, sound);
        this.color = color;
    }

    makeSound() {
        super.makeSound();
        console.log(`color: ${this.color}`);
    }
}

const dog = new Dog("Jerman sepat", "Woof", "Black");
dog.makeSound();