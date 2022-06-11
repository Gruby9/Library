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
    myLibrary.push(newBook)
}
tiles
addBookToLibrary('ksiazka', 'ja', 298);
addBookToLibrary('ksiazka2', 'ja', 5656);
addBookToLibrary('slepnacodswiatel', 'zulczyk', 450)

function displayALibrary() {
    while (tiles.firstChild) {
        tiles.removeChild(tiles.firstChild)
    }

    for (book in myLibrary) {
        console.log(myLibrary[book].title, 
            myLibrary[book].author, 
            myLibrary[book].pages
        )
        const newTile = document.createElement('div.tile');
        
        newTile.innerHTML = `<h1 class='title'>${myLibrary[book].title}</h1>
                             <h2 claass='author'>${myLibrary[book].author}</h2>
                             <p class='pages'>${myLibrary[book].pages}</p>
                             <button class='removeBook'>Remove Book</button>`

        tiles.appendChild(newTile)
    }
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


function removeBook() {
    const btnRemoveBook = document.querySelector('.removeBook')
    btnRemoveBook.addEventListener('click', () => {
        tiles.removeAttribute(btnRemoveBook.parentNode) 
    })
}