/*---------------ACTION BURGER MENU------------------*/
const toggleMenuElement=document.getElementById('toggle-menu')
const mainMenuElement=document.getElementById('navbar')
toggleMenuElement.addEventListener('click', ()=>{
    mainMenuElement.classList.toggle('navbar--show')
})
class Item{
    constructor(name, price){
        this.name=name
        this.price=price
    }
}
let cart=[]
/*------------------ACCESO AL DOM--------------------*/
const items=document.getElementsByClassName('shop-container__items-item')
const nameItem=document.getElementsByClassName('shop-container__items-item__info-name')
const priceItem=document.getElementsByClassName('price-num')
const cartShoppingButton=document.getElementsByClassName('shop-container__items-item__icon')
const cartShopping=document.getElementById('cartShopping')
const cartShopping_container=document.getElementById('cartShopping-container')
const cartShopping_btnShowContainer=document.getElementById('cartShoppingBtnShowContainer')
const counterShopping=document.getElementById('counterShopping')
const cartContainer=document.getElementById('cartShopping-container__items')
const cartTotal=document.getElementById('cartShopping-container__total')
/*--------------------------------------------------------*/
let totalCarrito=0;
for(let i=0; i<items.length; i++){
    cartShoppingButton[i].addEventListener('click', ()=>{
        const item=new Item(nameItem[i].innerHTML, priceItem[i].innerHTML)
        cart.push(item) //ACA TRATE DE HACER LO QUE ME COMENTASTE EN EL ANTERIOR DESAFIO PERO DESPUES CUANDO LO QUIERO RECORRER Y AGREGAR EL HTML EN EL CONTAINER DEL CARRITO NO ME FUNCIONA.
        counterShopping.innerHTML=parseInt(counterShopping.innerHTML) + 1
        totalCarrito+=parseInt(item.price)
        let itemCarrito=document.createElement('div')
        itemCarrito.innerHTML=`<p class="nameItem">${item.name}</p>
                                                   <b class="priceItem">$${item.price}<b>`
        itemCarrito.className='cartShopping-container__items-item d-flex align-items-start justify-content-between p-4 gap-4'
        cartContainer.appendChild(itemCarrito)
        cartTotal.innerHTML=`TOTAL $${totalCarrito}`  
    })
}
cartShopping_btnShowContainer.addEventListener('click', ()=>{
    if(parseInt(counterShopping.innerHTML)!==0){
        cartShopping_container.classList.toggle('cartShopping-container--show')
        cartShopping_btnShowContainer.classList.toggle('cartShopping-btnShowContainer--rotate')
    }
})