class Item{
    constructor(name, price, type, nameImg){
        this.name=name
        this.price=price
        this.type=type
        this.nameImg=nameImg
    }
}

// GET DATA FROM JSON STORING ON ARRAY (array para agregar items al carrito)
let arrayItems=[]
let arrayTypesBebidas=[]
let url='https://docs.google.com/spreadsheets/d/18ICf1NwMKpp7YU5HRw3AzXF9zSSgCLe5hCePhxUeDik/gviz/tq?'
fetch(url)
    .then((resp)=>resp.text())
    .then((rep)=>{
        const data=JSON.parse(rep.substring(47).slice(0, -2))
        data.table.rows.forEach(element=>{
            const item= new Item(element.c[0].v, element.c[1].v, element.c[2].v, element.c[3].v)
            if(!arrayTypesBebidas.includes(item.type)){
                arrayTypesBebidas.push(item.type)
                arrayTypesBebidas.sort()
            }
            arrayItems.push(item)
            arrayItems.sort((a, b)=>a.name.localeCompare(b.name))
        })
    })
