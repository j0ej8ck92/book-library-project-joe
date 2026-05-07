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

  const newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);

  const cardDiv = document.createElement("div");
  cardDiv.classList.add("card");

  const libraryContent = document.querySelector(".library-content");
  libraryContent.append(cardDiv);

  const bookTitle = document.createElement("div");
  bookTitle.classList.add("book-title");
  cardDiv.append(bookTitle);
  bookTitle.textContent = newBook.title;

  const authorName = document.createElement("div");
  authorName.classList.add("author");
  cardDiv.append(authorName);
  authorName.textContent = newBook.author;

  const bookPages = document.createElement("div");
  bookPages.classList.add("pages");
  cardDiv.append(bookPages);
  bookPages.textContent = newBook.pages;

  const bookRead = document.createElement("div");
  bookRead.classList.add("read");
  cardDiv.append(bookRead);
 
  const readButton = document.createElement("button");
  readButton.classList.add("read-yes-or-no");
  bookRead.append(readButton);
  readButton.textContent = "Read:";

  const readValue = document.createElement("div");
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

  const deleteDiv = document.createElement("div");
  deleteDiv.classList.add(".delete-div");
  cardDiv.append(deleteDiv);

  const deleteBookButton = document.createElement("button");
  deleteBookButton.classList.add("delete-book-button");
  deleteBookButton.textContent = "Delete";
  deleteDiv.append(deleteBookButton);

  deleteBookButton.addEventListener("click", function(event) {

    if (!confirm("Are you sure you want to delete this book?")) {
      return;
    }
    
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


const form = document.getElementById("form");
const bookNameInput = document.getElementById("book-name");
const authorNameInput = document.getElementById("author-name");
const pageCountInput = document.getElementById("page-count");
const readSelection = document.getElementById("select");
const submitButton = document.getElementById("submit");

form.addEventListener("submit", (event) => {
   event.preventDefault();
   addBookToLibrary(bookNameInput.value, authorNameInput.value, pageCountInput.value, readSelection.value);
   form.reset();
   console.log(myLibrary);
})




