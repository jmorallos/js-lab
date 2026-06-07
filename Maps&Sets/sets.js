// Set -> lets us store unique values of any type, -> it ensures each value in it appear only once, 
// WeakSet -> set with fewer feeature, 

// const myFirstSet = new Set();

// const treeSet = new Set(["Baoba", "Jackalberry", "Mopane Tree", "Breadfruit"]);

// console.log(treeSet);
// Set(4) { 'Baoba', 'Jackalberry', 'Mopane Tree', 'Breadfruit' }

// Methods us can use to manipulate a Set:
// delete ()
// clear()
// has()
// entries()
// forEach()
// keys()
// values()

const treeSet = new Set();

treeSet.add('Baobab');
treeSet.add('Jackalberry');
// console.log(treeSet);

treeSet.delete('Baobab');
// console.log(treeSet);

treeSet.add('Mopane Tree');
// console.log(treeSet.has('Mopane Tree'));
// console.log(treeSet)

// console.log(treeSet.entries());
// console.log(`treeSet keys: ${treeSet.keys()}`)
// console.log(`treeSet values: ${treeSet.values()}`)

treeSet.forEach((tree) => console.log(tree));
console.log(treeSet.size);

// treeSet.clear();
// console.log(treeSet);

// WeakSet
// methods
// add, delete, has

const treeWeakSet = new WeakSet();

const baobab = {name: "Baobab"};
treeWeakSet.add(baobab);

console.log(treeWeakSet);