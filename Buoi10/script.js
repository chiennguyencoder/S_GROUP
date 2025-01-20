const $ = document.querySelector.bind(document)
const app = $('#app')
const btn = $('.btn')
let cnt = 1;

function render(){
    let tmp = cnt;
    for (let i = tmp; i < tmp + 5; i++){
        let div = document.createElement('div')
        div.innerHTML = `<p>${cnt}. ${data.results[i].name}</p>`
        app.appendChild(div)
        cnt++;
    }
}   

function loadHandle(callback){
    callback()
}

// loadHandle(render)
    
btn.addEventListener('click', function(callback){
    loadHandle(render)
})


// Array method

// Map
const arr = [1,2,3,4,5,6,5,7,8,9]

const newArr =  arr.map((value, index, arr) => {
    return (index + " " + value)
})

console.log(newArr)

// Find
const finded = arr.find((value, index, arr) => {
    return value === 10
})

console.log("Gia tri tim duoc ", finded)

// Filter

const res = arr.filter(
    function(value, index) {
        return index > 4
    }
)

console.log(res)

// Search

const searchInput = $('input')

function renderPokemon(results){
    const div = document.createElement('div')
    const box = $('.box')

    results.forEach((value, index) => {
        let div = document.createElement('div')
        div.innerHTML = `<span>${index + 1}. ${value.name}</span>`
        box.appendChild(div)
    })


}

searchInput.addEventListener('input', function(){
    const box = $('.box')
    box.innerHTML = ''

    const results = data.results.filter((value) => {
        return value.name.includes(searchInput.value)
    })
    renderPokemon(results)   
    console.log(results)
})



const res2 = arr.reduce((preValue, curValue, curIndex, arr) => {
    return preValue
})

console.log(res2)