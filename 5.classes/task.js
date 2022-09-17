// Task 5-1
class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;    
    }

    fix() {
        this.state = this.state * 1.5;
    }

    set state(value) {

        if (value < 0) {
            this._state = 0;
        } else if (value > 100) {
            this._state = 100;
        } else {
            this._state = value;
        }
    }

    get state() {
        return this._state;
    }
}

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = "magazine";
    }
}

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount ) {
        super(name, releaseDate, pagesCount);
        this.author = author;
        this.type = "book";
    }
}

class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "novel"
    }
}

class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "fantastic";
    }
}

class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "detective";
    }
}

// Task 5-2
class Library extends Book {
    constructor(name) {
        super();
        this.name = name;
        this.books = [];
    }

    addBook(book) {
        if (this.state > 30) {
            this.books.push(book);
        } else return;
    }

    findBookBy(type, value) {
        let searchBook = this.books.find(ibook => ibook[type] === value);
        if (searchBook === undefined) {
            return null;
        } else return searchBook;
    }

    giveBookByName(bookName) {
        let findBook = this.books.findIndex(ibook => ibook.name === bookName);
        if (findBook === -1) {
            return null;
        } else {            
            let findBookName = this.books[findBook];
            this.books.splice(findBook, 1);
            return findBookName;
        }
    }
}

// Task 5-3
class Student {
    constructor(name) {
        this.name = name;
        this.marks = [];
    }

    addMark(mark,subject) {
        if (mark < 0 && mark > 5) {
            console.log("Введены некорретные отметки.");
        } else {
            this.marks[subject].push(mark);
        }
    }

    getAverageBySubject(subject) {
        let arr = [];
        let summ = 0;

        for (let i = 0; i < this.marks.length; i++) {
            if (this.marks[i][1] === subject) {
                summ += this.marks[i][0];
                arr.push(this.marks[i][0]);
            }        
        }
        return (summ/arr.length);
    }

    getAverage() {
        let summ = 0;
        for (let i = 0; i < this.marks.length; i++) {
            summ += this.marks[i];
        }
        return (summ / this.marks.length);
    }
}