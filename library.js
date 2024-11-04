const myLibrary =[{
    title:"GOT",
    author:"G.R.Martin",
    pages:200,
    read:"yes"
},
{
    title:"Aragon",
    author:"Dragon guy",
    pages:150,
    read:"no",
},
{
    title:"Dune",
    author:"Sand guy",
    pages:300,
    read:"yes",
}];
const display = document.querySelector("#display");
const add = document.querySelector("#add");
const form = document.querySelector("#book-form");
const formButton = document.querySelector("#form-button");
const bookTitle = document.querySelector("#title");
const author = document.querySelector("#author");
const pages = document.querySelector("#pages");
const yes = document.querySelector("#yes");
const no = document.querySelector("#no");
const formBtn = document.querySelector("#form-button");
function Book(title,author,pages,read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

    this.info = function(){
        console.log(this.name + " by " + this.author + " , "
            + this.pages + " pages, " + this.read
        );
    }

}

function addBookToLibrary(){
    
}
function showForm(){
    form.style.display = "block";
}

function displayBook(){
    for(let book of myLibrary){
        let newBook = document.createElement("div");
        newBook.classList.add("display-books");
        newBook.innerText += book.title + book.author + book.pages + book.read;
        display.appendChild(newBook);
        
    }
}
function testRadio(){
    if(yes.checked){
        console.log(yes.value);
    }
    if(no.checked){
        console.log(no.value);
    }
}
displayBook();
add.addEventListener("click",showForm);
formBtn.addEventListener("click",testRadio);