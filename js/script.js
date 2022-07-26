class Bebida{
    constructor(cod, nombre,  precio){
        this.cod=cod
        this.nombre=nombre
        this.precio=precio
    }
    infoBebida(){
        return this.cod+') '+this.nombre+' - $'+this.precio
    }
    getPrecio(){
        return this.precio
    }
}
const informacionBebidas=(bebidas)=>{
    let info=''
    for(b of bebidas){
        info+=b.infoBebida()+'\n'
    }
    return info
}
const totalAPagar=(bebidasSeleccionadas)=>{
    let total=0
    for(b of bebidasSeleccionadas){
        total+=b.getPrecio()
    }
    return total
}
const b1=new Bebida(1, 'Fernet Branca', 1800)
const b2=new Bebida(2, 'Vodka Smirnoff', 1300)
const b3=new Bebida(3, 'Cerveza Sneijder', 280)
const b4=new Bebida(4, 'Gin Hendricks', 1900)
const b5=new Bebida(5, 'Campari', 1250)
const bebidas=[b1,b2,b3,b4,b5]
const bebidasSeleccionadas=[]
alert('¡Bienvenido a CASATOMADA!\nA continuacion se le mostrará las bebidas de las cuales disponemos.')
let codB=parseInt(prompt('Indique el codigo de la bebida que desea o escriba -1 para salir: \n'+informacionBebidas(bebidas)))
while(codB!==-1){
    switch(codB){
        case 1:
            bebidasSeleccionadas.push(b1)
            alert('Bebida agregadada correctamente.')
            break;
        case 2:
            bebidasSeleccionadas.push(b2)
            alert('Bebida agregadada correctamente.')
            break;
        case 3:
            bebidasSeleccionadas.push(b3)
            alert('Bebida agregadada correctamente.')
            break;
        case 4:
            bebidasSeleccionadas.push(b4)
            alert('Bebida agregadada correctamente.')
            break;
        case 5:
            bebidasSeleccionadas.push(b5)
            alert('Bebida agregadada correctamente.')
            break;
        default:
            alert('Código no válido.')
            break;
    }
    codB=parseInt(prompt('Indique el codigo de la bebida que desea o escriba -1 para salir: \n'+informacionBebidas(bebidas)))
}
alert('Las bebidas seleccionadas fueron: \n'+informacionBebidas(bebidasSeleccionadas)+'\nTotal a pagar: $'+totalAPagar(bebidasSeleccionadas))

