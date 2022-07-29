/*---------------ACTION BURGER MENU------------------*/
const toggleMenuElement=document.getElementById('toggle-menu')
const mainMenuElement=document.getElementById('navbar')
toggleMenuElement.addEventListener('click', ()=>{
    mainMenuElement.classList.toggle('navbar--show')
})
/*------------------ACCESO AL DOM--------------------*/
const combos=document.getElementsByClassName('sale-container__item')
const nameCombos=document.getElementsByClassName('sale-container__item-name')
const codCombos=document.getElementsByClassName('sale-container__item-cod__item')
const priceCombos=document.getElementsByClassName('sale-container__item-price__value')
const containerCarrito=document.getElementById('carrito-container')
const totalCarrito=document.getElementById('carrito-total')
let totalCompra=0
let salida=''
while(!salida.toUpperCase().includes('N')){
    let comboSeleccionado=prompt('Ingrese el número de combo que desea agregar al carrito: ')
    if(comboSeleccionado<combos.length && comboSeleccionado>0){
        for(let i=0; i<combos.length-1; i++){
            if(comboSeleccionado==codCombos[i].innerHTML){
                totalCompra+=parseInt(priceCombos[i].innerHTML)
                let itemCarrito=document.createElement('div')
                itemCarrito.innerHTML=`<p>${nameCombos[i].innerHTML}</p>
                                                           <b>$${priceCombos[i].innerHTML}</b>`;
                itemCarrito.className='carrito-container__item d-flex flex-row align-items-center justify-content-between p-4 gap-4'
                containerCarrito.appendChild(itemCarrito)
            }
        }
        salida=prompt('Desea agregar otra cosa al carrito?')
    } else{
        alert('Código no válido')
    }
}
totalCarrito.innerHTML=`TOTAL $${totalCompra}`
/*---------------------------------------------------------*/