// CRUD -> create, read update, and delete
// persistent storage -> saving data,  available even after the power is turned off or restarted
// http methods
// POST -> used to create a new resource
// GET -> used to retrieve or read data
// PUT -> used to udpatea a resource by replacing it entirely
// PATCH -> used to partially update a resource
// DELETE -> used to remove a resource


let items = [];

// Create
function createItem(item) {
    items.push(item);
}

// Read
function readItems() {
    return items;
}

// Update
function updateItem(index, newItem) {
    items[index] = newItem;
}

// Delete
function deleteItem(index) {
    items.splice(index, 1);
}

// example usage
createItem('Book');
console.log(readItems()); // [ 'Book ']
updateItem(0, 'Magazine');
console.log(readItems()); // [ 'Magazine' ]
deleteItem(0);
console.log(readItems()); // []