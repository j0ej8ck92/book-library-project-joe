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

  console.log(libraryContent);
  console.log(cardDiv);

  let bookTitle = document.createElement("div");
  bookTitle.classList.add("book-title");
  cardDiv.append(bookTitle);
  bookTitle.textContent = newBook.title;

  console.log(bookTitle);

  let authorName = document.createElement("div");
  authorName.classList.add("author");
  cardDiv.append(authorName);
  authorName.textContent = newBook.author;

  console.log(authorName);

  let bookPages = document.createElement("div");
  bookPages.classList.add("pages");
  cardDiv.append(bookPages);
  bookPages.textContent = newBook.pages;

  console.log(bookPages);

  let bookRead = document.createElement("div");
  bookRead.classList.add("read");
  cardDiv.append(bookRead);

  let readButton = document.createElement("button");
  readButton.classList.add("read-yes-or-no");
  bookRead.append(readButton);
  readButton.textContent = "Read";

  readButton.addEventListener("click", function() {
    if (readButton.textContent === "Read") {
      readButton.textContent = "Not Read";
    } else {
      readButton.textContent = "Read";
    }

  });

  console.log(bookRead);
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




