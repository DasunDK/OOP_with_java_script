

// --- Two ---

class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;

    }

    area() {
        return this.height * this.width;
    }

    perimeter() {
        return 2 * (this.height + this.width);
    }

}

const rect01 = new Rectangle(10, 20);

console.log(rect01.area());
console.log(rect01.perimeter());






