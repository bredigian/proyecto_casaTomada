/*---------------ACTION BURGER MENU------------------*/
const toggleMenuElement=document.getElementById('toggle-menu')
const mainMenuElement=document.getElementById('navbar')
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
    new Item(1, 'fernetCoca.jpg', 'Fernet 1L + Coca Coca 2.25L', 2000),
    new Item(2, 'smirnoffSprite.jpg', 'Smirnoff 750ml + Sprite 2.25L', 1700),
    new Item(3, 'ginTonica.jpg', 'Gin Brighton 750ml + Tónica 1,5L', 1900),
]

// BEBIDAS
const arrayBebidas=[
    new Item(1,'andesRubia.png', 'Andes Rubia', 170),
    new Item(2,'budweiser.png', 'Budweiser', 160),
    new Item(3,'heineken.jpg', 'Heineken', 180),
    new Item(4,'ginBombay.jpg', 'Gin Bombay', 1400),
    new Item(5,'fernetBranca.png', 'Fernet B. 750ml', 1400),
]

/*----------------INDEX SECTION----------------*/
if(location.href.includes('index.html')){
    const saleIndexContainer=document.getElementById('saleIndexContainer')
    const drinksIndexContainer=document.getElementById('drinksIndexContainer')
    
    const createItemsIndexDOM=(array, container)=>{
        array.forEach(element => {
            let item=document.createElement('div')
            if(container==saleIndexContainer){
                item.innerHTML=`
                <div class="items-container__item d-flex flex-column align-items-center gap-4">
                    <div class="items-container__item-img">
                        <img src="./img/bebidas/combos/${element.img}" alt="">
                    </div>
                    <span class="items-container__item-name">${element.name}</span>
                    <div class="items-container__item-price">
                        <span>$</span>
                        <span class="items-container__item-price__value">${element.price}</span>
                    </div>
                </div>
                `
            } else{
                item.innerHTML=`
                <div class="items-container__item d-flex flex-column align-items-center gap-4">
                    <div class="items-container__item-img">
                        <img src="./img/bebidas/solo/${element.img}" alt="">
                    </div>
                    <span class="items-container__item-name">${element.name}</span>
                    <div class="items-container__item-price">
                        <span>$</span>
                        <span class="items-container__item-price__value">${element.price}</span>
                    </div>
                </div>
                `
            }
            item.className='items-container__item d-flex flex-column align-items-center gap-4'
            if(container==saleIndexContainer){
                saleIndexContainer.appendChild(item)
            } else{
                drinksIndexContainer.appendChild(item)
            }
        })
    }
    createItemsIndexDOM(arrayCombos, saleIndexContainer)
    createItemsIndexDOM(arrayBebidas, drinksIndexContainer)
}

/*----------------COMPRAR SECTION----------------*/
if(location.href.includes('shop.html')){
    arrayBebidas.push(
        new Item(6,'andesRoja.png', 'Andes Roja', 170),
        new Item(7,'andesNegra.png', 'Andes Negra', 170),
        new Item(8,'andesRosa.png', 'Andes Ipa Roja', 170),
        new Item(9,'andesVendimia.png', 'Andes Vendimia 2022', 170),
        new Item(10,'andesVerde.png', 'Andes Ipa Andina', 170),
        new Item(11,'budweiserBotella.jpg', 'Budweiser 750ml', 230),
        new Item(12,'fernetBranca.png', 'Fernet Branca 1L', 1700),
        new Item(13,'fernetBuhero.png', 'Fernet Buhero Negro 750ml', 1250),
        new Item(14,'ginBeefeater.jpg', 'Gin Beefeater', 1400),
        new Item(15,'ginbrighton.jpg', 'Gin Brighton', 1400),
        new Item(16,'ginGordon.jpg', 'Gin Gordon', 1400),
        new Item(17,'jagger.jpg', 'Jaggermeifter', 1400),
        new Item(18,'smirnoff.jpg', 'Vodka Smirnoff', 1400),
        new Item(19,'smirnoffApple.png', 'Vodka Smirnoff Apple', 1400),
        new Item(20,'smirnoffCitric.jpg', 'Vodka Smirnoff Citric', 1400),
        new Item(21,'smirnoffWatermelon.png', 'Vodka Smirnoff Watermelon', 1400),
        new Item(22,'smirnoffRaspberry.png', 'Vodka Smirnoff Raspberry', 1400),
        new Item(23,'absolut.png', 'Vodka Absolut', 1400),
    )
    
    const combosShopContainer=document.getElementById('combosContainer')
    const drinksShopContainer=document.getElementById('drinksContainer')
    
    const createItemsDOM=(array, container)=>{
        array.forEach(element => {
            let item=document.createElement('li')
            item.className='shop-container__items-item d-flex flex-column align-items-end w-100 h-100 p-4'
            if(array==arrayBebidas){
                item.innerHTML=`
                <div class="shop-container__items-item__icon">
                    <i class="fa-solid fa-cart-shopping"></i>
                </div>
                <div class="shop-container__items-item__cont d-flex align-items-center w-100 justify-content-between p-4">
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
                <div class="shop-container__items-item__cont d-flex align-items-center w-100 justify-content-between p-4">
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
    createItemsDOM(arrayCombos, combosShopContainer)
    createItemsDOM(arrayBebidas, drinksShopContainer)
    
    /*------------------EVENTOS--------------------*/
    const arrayAllItems=arrayCombos.concat(arrayBebidas)
    
    const arrayShoppingCart=[]
    const shoppingCartContainerItems=document.getElementById('cartShopping-container__items')
    const shoppingCartItem_icon=document.getElementsByClassName('shop-container__items-item__icon')
    const cartShoppingCounter=document.getElementById('counterShopping')
    const cartShoppingTotal=document.getElementById('cartShopping-container__total')
    
    /*--------------------------------------------------------*/
    let totalCarrito=0;
    for (let i=0; i<arrayAllItems.length; i++) {
        shoppingCartItem_icon[i].addEventListener('click', () =>{
            arrayShoppingCart.push(arrayAllItems[i])
            cartShoppingCounter.innerHTML=parseInt(cartShoppingCounter.innerHTML) + 1
            const shoppingCartItem=document.createElement('div')
            shoppingCartItem.className='cartShopping-container__items-item d-flex align-items-start justify-content-between p-4 gap-4'
            shoppingCartItem.innerHTML=`
            <p class="nameItem">${arrayAllItems[i].name}</p>
            <b class="priceItem">$${arrayAllItems[i].price}</b>
            `
            shoppingCartContainerItems.appendChild(shoppingCartItem)
    
            totalCarrito+=arrayAllItems[i].price
            cartShoppingTotal.innerHTML=`TOTAL $${totalCarrito}`
        })
    }
    const shoppingCartButtonShowContainer=document.getElementById('cartShoppingBtnShowContainer')
    const shoppingCartContainer=document.getElementById('cartShopping-container')
    
    shoppingCartButtonShowContainer.addEventListener('click', ()=>{
        if(parseInt(counterShopping.innerHTML)!==0){
            shoppingCartContainer.classList.toggle('cartShopping-container--show')
            shoppingCartButtonShowContainer.classList.toggle('cartShopping-btnShowContainer--rotate')
        }
    })
}