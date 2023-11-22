const books = [];
const MAX_SIZE = 5;

function putBook(bookValue) {
    if (bookValue && books.length < MAX_SIZE) {
        books.unshift(bookValue); // Add the clicked value to the beginning of the array (top of the pillar)
        displayBooks();
        animateBook('book-added');
    } else if (!bookValue) {
        alert('Please select a valid book!');
    } else {
        alert('Pillar is full!');
    }
}

function pickBook() {
    if (books.length > 0) {
        animateBook('book-removed'); // Animate before removing the book
        setTimeout(() => {
            books.shift(); // Remove the first (top) book after animation
            displayBooks();
        }, 500); // Adjust the time according to the animation duration
    } else {
        alert('No book to pick!');
    }
}

function animateBook(animationClass) {
    const booksDiv = document.getElementById('books');
    const bookElements = booksDiv.getElementsByClassName('book');
    const firstBook = bookElements[0]; // Top book

    if (firstBook) {
        firstBook.classList.add(animationClass);
        
        setTimeout(() => {
            firstBook.classList.remove(animationClass);
        }, 5000);
    }
}

function peekBook() {
    if (books.length > 0) {
        alert('Top book: ' + books[0]);
    } else {
        alert('Pillar is empty!');
    }
}

function isEmpty() {
    if (books.length === 0) {
        alert('Pillar is empty');
    } else {
        alert('Pillar is not empty');
    }
}

function isFull() {
    if (books.length === MAX_SIZE) {
        alert('Pillar is full');
    } else {
        alert('Pillar is not full');
    }
}

function displayBooks() {
    const booksDiv = document.getElementById('books');
    booksDiv.innerHTML = books.map((book, index) => {
        const serialNumber = books.length - index; // Reversed serial number calculation
        const bookElement = `<div class="book">
                                <span class="serial">${serialNumber}</span>
                                <span class="index">${book}</span>
                            </div>`;
        return bookElement;
    }).join('');
}