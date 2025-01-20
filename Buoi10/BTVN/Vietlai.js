/* 
    Viết lại phương thức forEach, find, map, includes, reduce, filter dưới dạng function
*/
const arr = ['Hello', 'Hi', 'World', 12, 2, 3, 4, 5]

function forEach(array, callback){
    for (let i = 0; i < array.length; i++)
        callback(array[i], i, array)
}


function map(array, callback){
    const ans = []
    for (let i = 0; i < array.length; i++)
        ans.push(callback(array[i], i, array))
    return ans
}

function find(array, callback){
    for (let i = 0; i < array.length; i++)
        if (callback(array[i], i, array)) return array[i]
}


function filter(array, callback){
    const ans = []
    for (let i = 0; i < array.length; i++)
        if (callback(array[i], i, array))
            ans.push(array[i])
    return ans
}

function reduce(array, callback, initialValue) {
    let number = initialValue;
    let total = 0;

    if (initialValue === undefined) {
        number = array[0];
        total = 1;
    }

    for (let i = total; i < array.length; i++) {
        number = callback(number, array[i], i, array);
    }

    return number;
}
