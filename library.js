const myLibrary =["GOT","Dragon","Code Geass"];
const display = document.querySelector("#display");

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

function displayBook(){
    for(let book of myLibrary){
        display.innerText += book + " ";
    }
}

displayBook();