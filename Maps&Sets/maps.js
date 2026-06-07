// Map -> built-in object that stores key-value pairs, similar to object
// allowing keys of any type including objects and functions

// WeakMap -> similar to map but uses weak references for its keys

const myFirstMap = new Map();

const myTreesMap = new Map([
    [{ type: 'decidious' }, 'Maple Tree'],
    [['forest', 'grove'], 'Pine tree'],
    [true, 'Birch tree'],
    [function() { return 'I am a function key'; }, 'Willow tree'],
]);

const mySecondTreesMap = new Map();

mySecondTreesMap.set({ type: 'deciduos'}, 'Maple tree');
console.log(mySecondTreesMap);

// methods u can use to work with a Map
// get(key)
// has(key)
// clear()
// entries()
// forEach()
// size

// WeakMap is not iterable
// 
const myTreeWeakMap = new WeakMap();

myTreeWeakMap.set({ id: 1 }, 'Maple tree');
myTreeWeakMap.set({ id: 2 }, 'Pine tree');
myTreeWeakMap.set({ id: 3 }, 'Oak tree');
myTreeWeakMap.set({ id: 4 }, 'Birch tree');
myTreeWeakMap.set({ id: 5 }, 'Willow tree');
