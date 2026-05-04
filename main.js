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

  let bookReadLabel = document.createElement("label");
  bookReadLabel.setAttribute("for", "confirm");
  bookReadLabel.textContent = "Read:";
  bookRead.append(bookReadLabel);

  let bookReadSelection = document.createElement("select");
  bookReadSelection.id = "confirm";
  bookReadSelection.name = "confirm";
  bookRead.append(bookReadSelection);

  let selectionOptionYes = document.createElement("option");
  selectionOptionYes.value = "yes";
  selectionOptionYes.textContent = "Yes";
  bookReadSelection.append(selectionOptionYes);

  let selectionOptionNo = document.createElement("option");
  selectionOptionNo.value = "no";
  selectionOptionNo.textContent = "No";
  bookReadSelection.append(selectionOptionNo);



 /* let readButton = document.createElement("button");
  readButton.classList.add("read-yes-or-no");
  bookRead.append(readButton);
  readButton.textContent = "Read";

  readButton.addEventListener("click", function() {
    if (readButton.textContent === "Read") {
      readButton.textContent = "Not Read";
    } else {
      readButton.textContent = "Read";
    }

  });*/

  //console.log(bookRead);
}

let htmlReadButton = document.querySelector(".read-yes-or-no");

htmlReadButton.addEventListener("click", function() {
  if (htmlReadButton.textContent === "Read") {
    htmlReadButton.textContent = "Not Read";
  } else {
    htmlReadButton.textContent = "Read";
  }
})


addBookToLibrary("To Kill a MockingBird", "Harper Lee", 284, "yes");
addBookToLibrary("Bless Me Ultima", "Rudolfo Amaya", 200, "yes");








//console.log(myLibrary);

//for (const obj in myLibrary) {

  //console.log(Object.values(obj));

//}

console.log(myLibrary);

for (obj in myLibrary) {
  console.log(myLibrary[obj]);
}

//Dialog Button Open and Close/////////

const bookDialog = document.getElementById("book-dialog");
console.log(bookDialog);

const addBookButton = document.querySelector("#book-dialog + .add-book");

console.log(addBookButton);

const cancelBookButton = document.querySelector("dialog button");
console.log(cancelBookButton);

addBookButton.addEventListener("click", function() {
  bookDialog.showModal();
})

cancelBookButton.addEventListener("click", function() {
  bookDialog.close();
})


let form = document.getElementById("form");
console.log(form);

let bookNameInput = document.getElementById("book-name");
console.log(bookNameInput);

let authorNameInput = document.getElementById("author-name");
console.log(authorNameInput);

let pageCountInput = document.getElementById("page-count");
console.log(pageCountInput);

let option = document.querySelector("option");
//let optionNo = document.querySelector("#no");


console.log(option);

form.addEventListener("submit", function(e) {
   e.preventDefault(); 
   
   if (option.value === "yes") {

      option.innerText = "Yes";

   } else (option.value === "no") 

      option.innerText = "No";

   

   
   

    addBookToLibrary(bookNameInput.value, authorNameInput.value, pageCountInput.value, option.innerText);
  //debugger;
})





