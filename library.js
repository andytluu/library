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
    let read = checkRadio();
    myLibrary.push(new Book(bookTitle.value,author.value,
        pages.value,read));
    resetForm();
    console.log(myLibrary);
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

function checkRadio(){
    if(yes.checked){
        return yes.value;
    }
    if(no.checked){
        return no.value;
    }
}

function resetForm(){
    bookTitle.value = "";
    author.value = "";
    pages.value = "";
    yes.checked = false;
    no.checked = false;
}
displayBook();
add.addEventListener("click",showForm);
formBtn.addEventListener("click",addBookToLibrary);