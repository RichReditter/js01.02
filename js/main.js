function Library(){
    this.books = [];

    this.add = function(book){
        this.books.push(book);
    }

    this.find = function(author){
        return this.books.find( element => element.author === author)
    }

    this.sortPages = function(){
        return this.books.sort( (e1,e2) => e1.pages - e2.pages)
    }

    this.sortYears = function(){
        return this.books.sort( (e1,e2) => e1.year - e2.year)
    }

    this.deleteBook = function(book){
        let deletedBook = this.books.findIndex( e => e.year === book)
        delete this.books[deletedBook]
        return this.books
    }
}


function Book(author, title, year, pages){
    this.author = author;
    this.title = title;
    this.year = year;
    this.pages = pages;
}


const book1 = new Book('author1','title1',1999, 359)
const book2 = new Book('author2','title2',999, 349)
const book3 = new Book('author3','title3',199, 500)
const book4 = new Book('author4','title4',1899, 301)
const book5 = new Book('author5','title5',1799, 39)
const book6 = new Book('author6','title6',1979, 34)

const library = new Library();
library.add(book1);
library.add(book2);
library.add(book3);
library.add(book4);
library.add(book5);
library.add(book6);

const findAuthorities = library.find('author2');
console.log('Найти книгу по автору:',findAuthorities);

const sortedPages = library.sortPages()
console.log('Отсортировано по страницам:',sortedPages)

const sortedYears = library.sortYears()
console.log('Отсортировано по годам: ',sortedYears)

const deletedBook = library.deleteBook(1979)
console.log('Удалена книга года издания 1979: ',deletedBook)
// requestedBook = books.find( element => element.author === requestedAuthor)



// console.log('Запрошенная книга:',requestedBook)
// sortedPages = books.sort( (e1,e2) => e1.pages - e2.pages)
// console.log('Copтировка по страницам: ',sortedPages)
// sortedAuthors = sortedPages.sort( (e1,e2) => e1.year - e2.year)
// console.log('Книги рассортированные по году издания : \n' ,sortedAuthors)

// deletedBookYear = 1799

// deletedBook = books.findIndex( e => e.year === deletedBookYear)
// delete books[deletedBook]
// console.log('Книги без одной книги, у которой год издания: ', deletedBookYear, books)
