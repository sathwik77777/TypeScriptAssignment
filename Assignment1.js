var Book = /** @class */ (function () {
    function Book(isbn, bookName, bookTitle, bookAuthor, BooksQuantity, bookPrice) {
        this.isbn = isbn;
        this.bookName = bookName;
        this.bookTitle = bookTitle;
        this.bookAuthor = bookAuthor;
        this.BooksQuantity = BooksQuantity;
        this.bookPrice = bookPrice;
    }
    Book.prototype.TotalPriceofBooks = function () {
        return this.BooksQuantity * this.bookPrice;
    };
    Book.prototype.displayBookDetails = function () {
        console.log("ISBN: ".concat(this.isbn));
        console.log("Book Name: ".concat(this.bookName));
        console.log("Book Title: ".concat(this.bookTitle));
        console.log("Book Author: ".concat(this.bookAuthor));
        console.log("Quantity of Books: ".concat(this.BooksQuantity));
        console.log("Book Price: $".concat(this.bookPrice));
    };
    return Book;
}());
var Book1 = new Book("7777", "My Life", "Life", "Sathwik", 5, 100);
Book1.TotalPriceofBooks();
Book1.displayBookDetails();
