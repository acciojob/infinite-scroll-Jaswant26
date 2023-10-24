//your code here!
// script.js
const list = document.getElementById('infi-list');
const itemsPerPage = 10;
let currentPage = 1;

function addMoreItems() {
    // Add 2 more list items
    for (let i = 0; i < 2; i++) {
        const listItem = document.createElement('li');
        listItem.textContent = `List Item ${currentPage * itemsPerPage + i + 1}`;
        list.appendChild(listItem);
    }
    currentPage++;
}

// Add initial list items
addMoreItems();

// Event listener for scroll
window.addEventListener('scroll', () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        addMoreItems();
    }
});

