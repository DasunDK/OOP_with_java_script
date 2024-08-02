

// --- Five-- -

class Shape {
    area() {
        throw new Error('This should override in sub classes');
    }
}

class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }
    area() {
        return Math.PI * this.radius * this.radius;
    }
}

class Traingle extends Shape {
    constructor(base, height) {
        super();
        this.base = base;
        this.height = height;
    }
    area() {
        return 0.5 * this.base * this.height;
    }
}

const circle = new Circle(10);
const circleArea = circle.area();
console.log(circleArea);

const traingle = new Traingle(10, 20);
const traingleArea = traingle.area();
console.log(traingleArea);







