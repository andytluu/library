let id  = 0;
const myLibrary = [];
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
    hidForm();
    displayBook();
    console.log(myLibrary);
    
}
function showForm(){
    form.style.display = "block";
}

function hidForm(){
    form.style.display = "none";
}


function displayBook(){
    display.textContent ="";
    const red = "red";
    const green = "green";
    let state = "";
    for(let book of myLibrary){
        if(book.read === "read"){
            state = green;
        }
        else{
            state = red;
        }
        let newBook = document.createElement("div");
        newBook.classList.add("display-books");
        newBook.innerHTML = `<p>${book.title}</p>
                            <p>${book.author}</p> 
                            <p>${book.pages}</p>
                            <button id="${book.title}-color" onclick="changeColor(this.id)" 
                            style="background-color:${state}">${book.read}</button>
                            <button id="${book.title}" onclick="removeBook(this.id)">Remove</button>`;
        //newBook.innerText += book.author + book.pages + book.read;
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

function removeBook(title){
    let index = 0;
    for(let i = 0; i<myLibrary.length;i++){
        if(myLibrary[i].title === title){
            index = i;
        }
    }

    myLibrary.splice(index,1);
    displayBook();
    console.log(myLibrary);
}

function changeColor(read){
    const colorBtn = document.querySelector(`#${read}`);
    if(colorBtn.textContent === "read"){
        colorBtn.style.backgroundColor = "green";
    }
    else{
        colorBtn.style.backgroundColor = "red";
    }
}
displayBook();
add.addEventListener("click",showForm);
formBtn.addEventListener("click",addBookToLibrary);