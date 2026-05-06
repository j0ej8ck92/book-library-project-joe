const myLibrary = [];

function Book(title, author, pages, read) { //figure out parameter for read value and how to use sync value of form to book constructor///
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

  let cardDiv = document.createElement("div");
  cardDiv.classList.add("card");

  let libraryContent = document.querySelector(".library-content");
  libraryContent.append(cardDiv);

  let bookTitle = document.createElement("div");
  bookTitle.classList.add("book-title");
  cardDiv.append(bookTitle);
  bookTitle.textContent = newBook.title;

  let authorName = document.createElement("div");
  authorName.classList.add("author");
  cardDiv.append(authorName);
  authorName.textContent = newBook.author;

  let bookPages = document.createElement("div");
  bookPages.classList.add("pages");
  cardDiv.append(bookPages);
  bookPages.textContent = newBook.pages;

  let bookRead = document.createElement("div");
  bookRead.classList.add("read");
  cardDiv.append(bookRead);
 
  let readButton = document.createElement("button");
  readButton.classList.add("read-yes-or-no");
  bookRead.append(readButton);
  readButton.textContent = "Read:";

  let readValue = document.createElement("div");
  readValue.classList.add("read-value");
  bookRead.append(readValue);
  readValue.textContent = newBook.read;

  readButton.addEventListener("click", function() {

    if (readValue.textContent === "Yes") {

      readValue.textContent = "No";

    } else {

      readValue.textContent = "Yes";
    }
  });

  let deleteDiv = document.createElement("div");
  deleteDiv.classList.add(".delete-div");
  cardDiv.append(deleteDiv);

  let deleteBookButton = document.createElement("button");
  deleteBookButton.classList.add("delete-book-button");
  deleteBookButton.textContent = "Delete";
  deleteDiv.append(deleteBookButton);

  deleteBookButton.addEventListener("click", function(event) {
    const bookId = newBook.id;
    const index = myLibrary.findIndex(book => book.id === bookId);
    myLibrary.splice(index, 1);
    cardDiv.remove();
    console.log(myLibrary);
  });
}

addBookToLibrary("Bless Me Ultima", "Rudolpho Anaya", 300, "Yes")
addBookToLibrary("To Kill a MockingBird", "Harper Lee", 284, "Yes");

const bookDialog = document.getElementById("book-dialog");
const addBookButton = document.querySelector("#book-dialog + .add-book");
const cancelBookButton = document.querySelector(".cancel-book");


addBookButton.addEventListener("click", function() {
  bookDialog.showModal();
})

cancelBookButton.addEventListener("click", function() {
  bookDialog.close();
})


let form = document.getElementById("form");
let bookNameInput = document.getElementById("book-name");
let authorNameInput = document.getElementById("author-name");
let pageCountInput = document.getElementById("page-count");
let readSelection = document.getElementById("select");
let submitButton = document.getElementById("submit");

form.addEventListener("submit", (event) => {
   event.preventDefault();
   addBookToLibrary(bookNameInput.value, authorNameInput.value, pageCountInput.value, readSelection.value);
   form.reset();
})


