const myLibrary = [];

function Book(title, author, pages, read) {
  // the constructor...
   this.title = title;
   this.author = author;
   this.pages = pages;
   this.read = read;
   this.id = crypto.randomUUID();
}

function addBookToLibrary(title, author, pages, read) {
  // take params, create a book then store it in the array
  let newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
}

addBookToLibrary("The Hobbit", "J.R.R. Tolkiein", 300, "yes");
addBookToLibrary("Bless Me Ultima", "Rudolfo Amaya", 200, "yes");


console.log(myLibrary);


