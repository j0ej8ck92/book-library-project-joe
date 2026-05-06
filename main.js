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

  //console.log(libraryContent);
  //console.log(cardDiv);
 
  let bookTitle = document.createElement("div");
  bookTitle.classList.add("book-title");
  cardDiv.append(bookTitle);
  bookTitle.textContent = newBook.title;

  //console.log(bookTitle);

  let authorName = document.createElement("div");
  authorName.classList.add("author");
  cardDiv.append(authorName);
  authorName.textContent = newBook.author;

  //console.log(authorName);

  let bookPages = document.createElement("div");
  bookPages.classList.add("pages");
  cardDiv.append(bookPages);
  bookPages.textContent = newBook.pages;

  //console.log(bookPages);

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

let readValue = document.querySelector(".read-value");
//console.log(readValue);

let htmlReadButton = document.querySelector(".read-yes-or-no");

htmlReadButton.addEventListener("click", function() {
  if (readValue.textContent === "Yes") {
    readValue.textContent = "No";
  } else {
    readValue.textContent = "Yes";
  }
})

let htmlDeleteBookButton = document.querySelector(".delete-book-html");
let htmlCard = document.querySelector(".card");
htmlDeleteBookButton.addEventListener("click", function() {
  htmlCard.remove();

})

addBookToLibrary("Bless Me Ultima", "Rudolpho Anaya", 300, "Yes")
addBookToLibrary("To Kill a MockingBird", "Harper Lee", 284, "Yes");




//Dialog Button Open and Close/////////

const bookDialog = document.getElementById("book-dialog");
//console.log(bookDialog);

const addBookButton = document.querySelector("#book-dialog + .add-book");

//console.log(addBookButton);

const cancelBookButton = document.querySelector(".cancel-book");
//console.log(cancelBookButton);

addBookButton.addEventListener("click", function() {
  bookDialog.showModal();
})

cancelBookButton.addEventListener("click", function() {
  bookDialog.close();
})


let form = document.getElementById("form");
//console.log(form);

let bookNameInput = document.getElementById("book-name");
//console.log(bookNameInput);

let authorNameInput = document.getElementById("author-name");
//console.log(authorNameInput);

let pageCountInput = document.getElementById("page-count");
//console.log(pageCountInput);

let readSelection = document.getElementById("select");

let submitButton = document.getElementById("submit");
//console.log(submit);





//let optionNo = document.querySelector("#no");




form.addEventListener("submit", (event) => {
   event.preventDefault();
   
   console.log(readSelection.value);

   addBookToLibrary(bookNameInput.value, authorNameInput.value, pageCountInput.value, readSelection.value);
   form.reset();
  debugger;
})





console.log(myLibrary);

