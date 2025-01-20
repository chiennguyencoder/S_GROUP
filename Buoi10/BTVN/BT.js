// Merge Array
function mergeArray(a, b){
    const c = []
    for (let i = 0; i < b.length; i++)
        c.push(b[i]);
    for (let i = 0; i < a.length; i++)
        c.push(a[i]);
    return c;
}

console.log("Merge Array : ", mergeArray(['a', 'b', 'c'], [1, 2, 3]))


// every 
const array = [2,4,6]

const evenNumber_Every = array.every((value) => {
    return value % 2 === 0
}) 
console.log("Even number (every): ",(evenNumber_Every ? "Yes" : "No"))

// some
const evenNumber_Some = array.some((value) => {
    return value % 2 === 0
})

console.log("Even number (some): ",(evenNumber_Some ? "Yes" : "No"))

// filter
const arr2 = [-4, -1, -7, 10, 5, 2]
console.log("Positive number in array: ", arr2.filter((value) => {
    return value > 0
}))

// find and findIndex
const positiveNumber = arr2.findIndex((value) => {
    return value > 0
})

if (positiveNumber !== -1)
    console.log(`First positive number : ${positiveNumber} ${arr2[positiveNumber]}`)
else 
    console.log(`First positive number : No result`)

// forEach
arr2.forEach((value) => {
    if (value % 5 === 0 )
        console.log(value);
})

function findIndex(array) {
    const first = array.indexOf(2);
    const last = array.lastIndexOf(2);

    if (first === -1) {
        console.log("No result");
    } else {
        console.log(`${first} ${last}`);
    }
}

findIndex([-1, 2, 3, 4, 2, 6]);
findIndex([0, 6]);

// join

function joinArray(arr) {
    console.log(arr.join(", "));
}

joinArray(["A", "B", "C"]); 
joinArray([1, 2, 3]);       

// map
function convert(arr) {
    const result = arr.map(Math.abs);
    console.log(result);
}

convert([2, -1, -8]);
