// alert("hello ")
// core javascript dom manipulation


// document.getElementById("root").innerText = "changed from our js file"

let numbers = [1, 2, 3]
let doubleNumbers = numbers.map(el => el * 2) 
console.log( doubleNumbers);

let todos = ["html","css","js"]
let remainignTodos1  = [...todos].filter((el,index) =>{
    if(el !== "css"){
        return true
    }
    return undefined // false  
})

let remainignTodos2  = [...todos].filter((el,index) =>{
    if(index !== 1 ){
        return true
    }
    return undefined // false
})
let remainignTodos  = [...todos].filter((el,index) => index !=1 )

console.log(remainignTodos);