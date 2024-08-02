// --- seven ---

class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }

    showDetails() {
        console.log(`Title:  ${this.title}, \nAuthor: ${this.author}, \nYear:   ${this.year}`);
    }
}

class Ebook extends Book {
    constructor(title, author, year, price) {
        super(title, author, year);
        this.price = price;
    }

    showDetails() {
        super.showDetails();
        console.log(`Price:  ${this.price}`);
    }
}


const bookTwo = new Ebook('JavaScript', 'John', 2020, 200);

bookTwo.showDetails();





