// ACCESOS AL DOM
const saleIndexContainer=document.getElementById('saleIndexContainer')
const drinksIndexContainer=document.getElementById('drinksIndexContainer')
const toggleMenuElement=document.getElementById('toggle-menu')
const mainMenuElement=document.getElementById('navbar')
const shoppingCartContainerItems=document.getElementById('cartShopping-container__items')
const shoppingCartTotal=document.getElementById('cartShoppingTotal')
const combosShopContainer=document.getElementById('combosContainer')
const drinksShopContainer=document.getElementById('drinksContainer')
const shoppingCartItem_icon=document.getElementsByClassName('shop-container__items-item__icon')
const cartShoppingCounter=document.getElementById('counterShopping')
const shoppingCartButtonShowContainer=document.getElementById('cartShoppingBtnShowContainer')
const shoppingCartContainer=document.getElementById('cartShopping-container')
const shoppingCartCleanButton=document.getElementById('cartShoppingClean')
const paymentContainer=document.getElementById('payment')
const paymentForm=document.getElementById('paymentForm')
const paymentButton=document.getElementById('paymentButton')

// FUNCIONES

// CREA LOS ITEMS EN EL INDEX
const createItemsIndexDOM=(array, container)=>{
    for(let i=0; i<array.length; i++){
        let item=document.createElement('div')
        if(i!==0){
            item.className='carousel-item'
        } else{
            item.className='carousel-item active'
        }
        if(container==saleIndexContainer){
            item.innerHTML=`
            <img src="./img/bebidas/carousel/${array[i].img}" class="d-block w-100" alt="...">
            <div class="carousel-caption d-md-block">
                <h5>${array[i].name}</h5>
                <p>$${array[i].price}</p>
            </div>
            `
            saleIndexContainer.appendChild(item)
        } else{
            item.innerHTML=`
            <img src="./img/bebidas/carousel/${array[i].img}" class="d-block w-100" alt="...">
            <div class="carousel-caption d-md-block">
                <h5>${array[i].name}</h5>
                <p>$${array[i].price}</p>
            </div>
            `
            drinksIndexContainer.appendChild(item)
        }
    }
}

// CREA LOS ITEMS EN LA SECCION DE COMPRAS
const createItemsShopDOM=(array, container)=>{
    array.forEach(element => {
        let item=document.createElement('li')
        item.className='shop-container__items-item d-flex flex-column align-items-end w-100 h-100 p-4'
        if(array==arrayBebidas){
            item.innerHTML=`
            <div class="shop-container__items-item__icon">
                <i class="fa-solid fa-cart-shopping"></i>
            </div>
            <div class="shop-container__items-item__cont d-flex align-items-center w-100 justify-content-between gap-3">
                <div class="shop-container__items-item__cont-img drinks-bigImg">
                    <img src="../img/bebidas/solo/${element.img}" alt="">
                </div>
                <div class="shop-container__items-item__cont-info d-flex flex-column align-items-center gap-3">
                    <span class="shop-container__items-item__cont-info__name">${element.name}</span>
                    <div class="price d-flex align-items-center">
                        <span>$</span>
                        <span class="price-num">${element.price}</span>
                    </div>
                </div>
            </div>
            `
        } else{
            item.innerHTML=`
            <div class="shop-container__items-item__icon">
                <i class="fa-solid fa-cart-shopping"></i>
            </div>
            <div class="shop-container__items-item__cont d-flex align-items-center w-100 justify-content-between gap-3">
                <div class="shop-container__items-item__cont-img">
                    <img src="../img/bebidas/combos/${element.img}" alt="">
                </div>
                <div class="shop-container__items-item__cont-info d-flex flex-column align-items-center gap-3">
                    <span class="shop-container__items-item__cont-info__name">${element.name}</span>
                    <div class="price d-flex align-items-center">
                        <span>$</span>
                        <span class="price-num">${element.price}</span>
                    </div>
                </div>
            </div>
            `
        }
        container.appendChild(item)
    });
}

// CREA UN NUEVO ITEM EN EL CARRITO DE COMPRAS
const createItemContainerShoppingCart=(element)=>{
    const shoppingCartItem=document.createElement('div')
    shoppingCartItem.className='cartShopping-container__items-item d-flex align-items-start justify-content-between p-4 gap-4'
    shoppingCartItem.innerHTML=`
        <p class="nameItem">${element.name}</p>
        <b class="priceItem">$${element.price}</b>
    `
    shoppingCartContainerItems.append(shoppingCartItem)
}

/*---------------ACTION BURGER MENU------------------*/
toggleMenuElement.addEventListener('click', ()=>{
    mainMenuElement.classList.toggle('navbar--show')
})

class Item{
    constructor(id, img, name, price){
        this.id=id
        this.img=img
        this.name=name
        this.price=price
    }
}

// COMBOS
const arrayCombos=[
    new Item('c1', 'fernetCoca.png', 'Fernet 1L + Coca Coca 2.25L', 2000),
    new Item('c2', 'smirnoffSprite.png', 'Smirnoff 750ml + Sprite 2.25L', 1700),
    new Item('c3', 'bombaySchweepes.png', 'Gin Bombay + Schweepes 2,25L', 1900),
]

// BEBIDAS
const arrayBebidas=[
    new Item('d1','andesRubia.png', 'Andes Rubia', 170),
    new Item('d2','ginBrighton.png', 'Gin Brighton', 1400),
    new Item('d3','smirnoffRaspberry.png', 'Vodka Smirnoff Raspberry', 1400),
    new Item('d5','absolut.png', 'Vodka Absolut', 1400),
]

/*----------------INDEX SECTION----------------*/
if(location.href.includes('index.html')){
    
    createItemsIndexDOM(arrayCombos, saleIndexContainer)
    createItemsIndexDOM(arrayBebidas, drinksIndexContainer)
}

/*----------------COMPRAR SECTION----------------*/
if(location.href.includes('shop.html')){

    arrayBebidas.push(
        new Item('d6','andesRoja.png', 'Andes Roja', 170),
        new Item('d7','andesNegra.png', 'Andes Negra', 170),
        new Item('d8','andesRosa.png', 'Andes Ipa Roja', 170),
        new Item('d9','andesVendimia.png', 'Andes Vendimia 2022', 170),
        new Item('d10','andesVerde.png', 'Andes Ipa Andina', 170),
        new Item('d11','budweiserBotella.png', 'Budweiser 750ml', 230),
        new Item('d12','fernetBranca.png', 'Fernet Branca 1L', 1700),
        new Item('d13','fernetBuhero.png', 'Fernet Buhero Negro 750ml', 1250),
        new Item('d14','ginBeefeater.png', 'Gin Beefeater', 1400),
        new Item('d15','budweiserLata.png', 'Budweiser', 160),
        new Item('d16','ginGordon.png', 'Gin Gordon', 1400),
        new Item('d17','jaggermeifter.png', 'Jaggermeifter', 1400),
        new Item('d18','smirnoff.png', 'Vodka Smirnoff', 1400),
        new Item('d19','smirnoffApple.png', 'Vodka Smirnoff Apple', 1400),
        new Item('d20','smirnoffCitric.png', 'Vodka Smirnoff Citric', 1400),
        new Item('d21','smirnoffWatermelon.png', 'Vodka Smirnoff Watermelon', 1400),
        new Item('d22','heinekenLata.png', 'Heineken', 180),
        new Item('d23','fernetBranca.png', 'Fernet B. 750ml', 1400),
        new Item('d24','ginBombay.png', 'Gin Bombay', 1400),
    )

    createItemsShopDOM(arrayCombos, combosShopContainer)
    createItemsShopDOM(arrayBebidas, drinksShopContainer)
    
    /*------------------EVENTOS--------------------*/
    const arrayItemsStorage=JSON.parse(localStorage.getItem('ITEMS'))
    const arrayAllItems=arrayCombos.concat(arrayBebidas)
    let itemsMessage=''
    let totalCarrito=0

    // ALMACENA ITEMS EN EL STORAGE Y AÑADE EL ITEM EN EL CONTAINER
    for (let i=0; i<arrayAllItems.length; i++) {
        shoppingCartItem_icon[i].addEventListener('click', () =>{
            cartShoppingCounter.innerHTML=parseInt(cartShoppingCounter.innerHTML)+1
            const itemsStorage=localStorage.getItem('ITEMS')
            let itemsStorageParsed=[]
            if(itemsStorage){
                itemsStorageParsed=JSON.parse(itemsStorage)
            }
            itemsStorageParsed.push(arrayAllItems[i])
            localStorage.setItem('ITEMS', JSON.stringify(itemsStorageParsed))
            createItemContainerShoppingCart(arrayAllItems[i])
            totalCarrito+=arrayAllItems[i].price
            shoppingCartTotal.innerHTML=`TOTAL $${totalCarrito}`
            itemsMessage+=`${arrayAllItems[i].name} $${arrayAllItems[i].price}${`%0A`}`
        })
    }

    // OBTIENE LOS ITEMS ALMACENADOS EN EL STORAGE Y LOS AÑADE AL CONTAINER
    if(arrayItemsStorage){
        arrayItemsStorage.forEach(element => {
            createItemContainerShoppingCart(element)
            totalCarrito+=element.price
            shoppingCartTotal.innerHTML=`TOTAL $${totalCarrito}`
            cartShoppingCounter.innerHTML=parseInt(cartShoppingCounter.innerHTML)+1
            itemsMessage+=`${element.name} $${element.price}${`%0A`}`
        });
    }

    // ABRE Y CIERRA CONTAINER DE LOS ITEMS SELECCIONADOS
    shoppingCartButtonShowContainer.addEventListener('click', ()=>{
        shoppingCartContainer.classList.toggle('cartShopping-container--show')
        shoppingCartButtonShowContainer.classList.toggle('cartShopping-btnShowContainer--rotate')
    })

    
        // GENERA ORDEN DE COMPRA MEDIANTE MENSAJE DE WHATSAPP %0A %20
    paymentForm.addEventListener('submit', (e)=>{
        e.preventDefault()
        if(itemsMessage.length!==0){
            const paymentOptions=document.getElementById('paymentOptions')
            const f=e.target
            const userData={
                userName: f[0].value,
                userPhone: parseInt(f[1].value),
                userAdress: f[2].value,
                userPayment: paymentOptions.options[paymentOptions.selectedIndex].text
            }
            location.href=`https://api.whatsapp.com/send?phone=5492281599471&text=*INFORMACIÓN%20DE%20COMPRA*%0ANombre:%20${userData.userName}%0ANumero%20de%20teléfono:%20${userData.userPhone}%0ADirección:%20${userData.userAdress}%0AMétodo%20de%20pago:%20${userData.userPayment}%0ABebidas:%0A${itemsMessage}%0ATOTAL:%20$${totalCarrito}`
        }
        else{
            const paymentErrorMesagge=document.createElement('div')
            paymentErrorMesagge.innerHTML=`
                <p class="m-0">¡El carrito esta vacio!</p>
            `
            paymentErrorMesagge.className='payment-message d-flex align-items-center justify-content-center w-100'
            paymentContainer.append(paymentErrorMesagge)
        }
    })

    // VACIA EL STORAGE Y REFRESCA LA PAGINA
    shoppingCartCleanButton.addEventListener('click', ()=>{
        localStorage.clear()
        location.reload()
    })

}