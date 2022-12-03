const ul = document.querySelector('.booksList ul');
const forms = document.forms;

// load books
function loadBooks() {
    let listBooks = data;
    ul.innerHTML = '';

    for (let i = 0; i < listBooks.length; i++) {
        let book = listBooks[i];
        readBooks(book.name, book.completed);
    }
}

loadBooks();

// Read Books
function readBooks(inputValue, completed) {
    const li = document.createElement('li');
    const bookName = document.createElement('span');
    const deleteBtn = document.createElement('span');

    // add text content
    bookName.textContent = inputValue;
    deleteBtn.textContent = 'delete';

    // add class
    bookName.classList.add('booksList__name');
    deleteBtn.classList.add('booksList__delete');

    // addend to DOM
    li.appendChild(bookName);
    li.appendChild(deleteBtn);

    if(completed){
        li.classList.add('completed');
    }

    ul.appendChild(li);

    li.addEventListener('click', toggleFinal);

    // reset input
    document.querySelector('.booksAdd input').value = '';

}

// Check remove completed
function toggleFinal() {
    if (this.classList.contains('completed')) {
        this.classList.remove('completed');
    } else {
        this.classList.add('completed');
    }
}

// delete books
ul.addEventListener('click', (e) => {
    if (e.target.className == 'booksList__delete') {
        const li = e.target.parentElement;
        li.parentNode.removeChild(li);
    }
});

// add books
const addForm = forms['booksAdd'];
addForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const input = e.target.querySelector('input').value;
    if (input == '') {
        alert('Please enter the book');
        return;
    }
    readBooks(input, false);
});

// filter
const searchBook = forms['books__search'];
searchBook.addEventListener('keyup', (e) => {
    e.preventDefault();

    const input = searchBook.querySelector('input');
    const filter = input.value.toUpperCase();
    const li = ul.querySelectorAll('li');

    for (let i = 0; i < li.length; i++) {
        const span = li[i].querySelector('.booksList__name');
        const name = span.textContent;
        if (name.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = '';
        } else {
            li[i].style.display = 'none';
        }
    }
})