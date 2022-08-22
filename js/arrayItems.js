// GET DATA FROM JSON STORING ON ARRAY (array para agregar items al carrito)
let arrayItems=[]

fetch("../allItems.json")
    .then((resp)=>resp.json())
    .then((data)=>{
        data.forEach(element=>{
            arrayItems.push(element)
            arrayItems.sort((a, b)=> a.name.localeCompare(b.name))
        })
    })
