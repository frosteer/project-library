//Add eventListener to all button on every cards.
editButton();
function editButton() {
let editButton = document.querySelectorAll(".card-edit button");

editButton.forEach(button => button.addEventListener("click", function(event) {
  let specCard = event.target.closest(".item")
  
  //target the span on the specific card
  let specAllSpan = specCard.querySelectorAll("div span");
  
  //if button innerText is "edit", it will change to "Save" & backgroundColor green;
  //the span becomes editable;
  if (button.innerText == "Edit") {
    button.style.backgroundColor = "green";
    button.innerText = "Save"
    specAllSpan.forEach(specAllSpan => {
      specAllSpan.contentEditable = true;
      specAllSpan.style.backgroundColor = "#e0e7ff";
    });
    
  } else {
  
    //if button innerText is "Save", it will change to "Edit" & backgroundColor purple;
    //the span becomes uneditable;
    if (button.innerText == "Save") {
      button.style.backgroundColor = "#4f46e5";
      button.innerText = "Edit"
      specAllSpan.forEach(specAllSpan => {
        specAllSpan.contentEditable = false;
        specAllSpan.style.backgroundColor = "transparent";
      });
      
    }
  }
}));
}
///////////////

let myLibrary =[];
let counter = 1;

function Book(id, title, author, pages, read, image) {
  this.id = id;
  this.title= title;
  this.author= author;
  this.pages= pages;
  this.read= read;
  this.image= image;
}

let dashboardButton = document.getElementById("dashboardButton");
dashboardButton.addEventListener("click", addBookToLibrary);

function addBookToLibrary() {
   //Get the input from the form
   let title = document.getElementById("title").value;
   let author = document.getElementById("author").value;
   let  pages = document.getElementById("pages").value;
   let  read = document.querySelector('input[name="read"]:checked').value;
   let  image  = document.getElementById("bookImage").value;
  
   if (title == "" || author == "" || pages == "" || read == "undefined") {
     return;
   }
  
   
  
   ////
   let cloneTarget = document.getElementById("mainCard");
   let clone = cloneTarget.cloneNode(true);
   
   let titleValue = clone.querySelector(".card-title span");
   let authorValue = clone.querySelector(".card-author span");
   let pagesValue = clone.querySelector(".card-pages span");
   titleValue.innerText = title;
   authorValue.innerText = author;
   pagesValue.innerText = pages;
  
  let imageValue = clone.querySelector(".card-image img");
  imageValue.src = image || "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png";
  imageValue.src.width = "100";
  
  if (read == "no") {
    let readButton = clone.querySelector(".card-read button");
    readButton.innerText = "Not Read"
  } 
  
  clone.style.display="flex"
  let parent = document.querySelector(".grid-container")
  parent.appendChild(clone);
  
  clone.id += counter;
  let id = clone.id;
  counter ++;
  newBook = new Book(id, title, author, pages, read, image);
  myLibrary.push(newBook);
  
  //test
  let newCardEditButton = clone.querySelector(".card-edit button");
  newCardEditButton.addEventListener("click", function(e) {
  
    let cloneCard = e.target.closest(".item");
    console.log(cloneCard)
    let cloneCardAllSpan = cloneCard.querySelectorAll("span");
    
    if (e.target.innerText == "Edit"){
      e.target.innerText = "Save";
      e.target.style.backgroundColor = "green";
      cloneCardAllSpan.forEach(span => {
      span.contentEditable = true;
      span.style.backgroundColor = "#e0e7ff";
    })} else {
    
      
    if (e.target.innerText == "Save"){
      e.target.innerText = "Edit";
      e.target.style.backgroundColor = "#4f46e5";
      cloneCardAllSpan.forEach(span => {
      span.contentEditable = false;
      span.style.backgroundColor = "transparent";
    })}
    
   
    
  }});
  
  
console.log(myLibrary)
}

////////
function toggleRead(event) {
  let buttonInnerText = event.target.innerText
  if (buttonInnerText == "Read"){
    event.target.innerText = "Not Read"
  } else {event.target.innerText = "Read"}
}

let mainCardHidden = document.querySelector("#mainCard");
mainCardHidden.style.display="none"


let form = document.querySelector("#form1")
form.addEventListener("submit", (e) => {
  e.preventDefault();
})



///delete function
function toggleDelete(event) {
  let buttonInnerText = event.target.innerText
  if (buttonInnerText == "Delete"){
    if (confirm("Press a button!") == true) {
      event.target.closest(".item").remove();
      console.log(event.target)
    }
  else return;
}}


console.log("ok")