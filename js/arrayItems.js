// GET DATA FROM JSON STORING ON ARRAY (array para agregar items al carrito)
let arrayItems=[]
let arrayTypesBebidas=[]
let url='https://docs.google.com/spreadsheets/d/18ICf1NwMKpp7YU5HRw3AzXF9zSSgCLe5hCePhxUeDik/gviz/tq?'
fetch(url)
    .then((resp)=>resp.text())
    .then((rep)=>{
        const data=JSON.parse(rep.substring(47).slice(0, -2))
        data.table.rows.forEach(element=>{
            if(!arrayTypesBebidas.includes(element.c[2].v)){
                arrayTypesBebidas.push(element.c[2].v)
                arrayTypesBebidas.sort()
            }
            arrayItems.push(element)
            arrayItems.sort((a, b)=> a.c[0].v.localeCompare(b.c[0].v))
        })
    })
