let myLibrary = [];

function Book(title, author, pages) {
    this.title = title,
    this.author = author,
    this.pages = pages
}

let library = document.querySelector('.library')
let tiles = document.querySelector('.tiles')

function addBookToLibrary(title, author, pages) {
    const newBook = new Book(title, author, pages)
    newBook.id = null
    myLibrary.push(newBook)
}

addBookToLibrary('ksiazka', 'ja', 298);
addBookToLibrary('ksiazka2', 'ja', 5656);
addBookToLibrary('slepnacodswiatel', 'zulczyk', 450)

function displayALibrary() {
    while (tiles.firstChild) {
        tiles.removeChild(tiles.firstChild)
    }

    for (let n = 0; n < myLibrary.length; n++) {
        
        const newTile = document.createElement(`div.tile`);

        newTile.setAttribute('id', `${n}`)
        
        newTile.innerHTML = `<h1 class='title'>${myLibrary[n].title}</h1>
                             <h2 claass='author'>${myLibrary[n].author}</h2>
                             <p class='pages'>${myLibrary[n].pages}</p>
                             <button class='removeBook'>Remove Book</button>`
        
        myLibrary[n].id = n;

        tiles.appendChild(newTile);
        console.log(myLibrary)
    }
    deleteBook()

}

displayALibrary()

const button = document.querySelector('.addBook')
button.addEventListener('click', function() {
    const newTitle = window.prompt('Tytul ksiazki, ktora chcesz dodac')
    const newAuthor = window.prompt('Autor ksiazki, ktora chcesz dodac')
    const newPages = window.prompt('Ile stron ma ksiazka, ktora chcesz dodac')

    addBookToLibrary(newTitle, newAuthor, newPages)
    displayALibrary()

    const test = document.querySelector('.test')
    test.textContent = newTitle
})

function deleteBook() {
    const removeBook = document.querySelectorAll('.removeBook')
    for (i = 0; i < removeBook.length; i++) {
        let n = i;
        removeBook[i].addEventListener('click', () =>{
            console.log('wcisniete')
            myLibrary.splice(n, 1)
            console.log(myLibrary)
            displayALibrary()
        })
    }
}

const guzik = document.querySelector('.guzik')
guzik.addEventListener('click', ()  => {
    console.log(myLibrary)
    myLibrary.splice(2, 1)
    console.log(myLibrary)
    displayALibrary()
})