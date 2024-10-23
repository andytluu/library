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
const formButton = document.querySelector("#form-button")
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
        newBook.innerText += book;
        display.appendChild(newBook);
        
    }
}

displayBook();
add.addEventListener("click",showForm)