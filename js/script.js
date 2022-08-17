//VARIABLES 
const phoneNumberWhatsapp=5492281599471
const userInstagram='https://www.instagram.com/casatomada_bebidas'

// ACCESOS AL DOM
const saleIndexContainer=document.getElementById('saleIndexContainer')
const drinksIndexContainer=document.getElementById('drinksIndexContainer')
const toggleMenuElement=document.getElementById('toggle-menu')
const mainMenuElement=document.getElementById('navbar')
const shoppingCartContainerItems=document.getElementById('cartShopping-container__items')
const shoppingCartTotal=document.getElementById('cartShoppingTotal')
const combosShopContainer=document.getElementById('combosContainer')
const drinksShopContainer=document.getElementById('drinksContainer')
const shoppingCartItem_icon=document.getElementsByClassName('shop-container__items-item__icon-img')
const cartShoppingCounter=document.getElementById('counterShopping')
const shoppingCartButtonShowContainer=document.getElementById('cartShoppingBtnShowContainer')
const shoppingCartContainer=document.getElementById('cartShopping-container')
const shoppingCartCleanButton=document.getElementById('cartShoppingClean')
const paymentContainer=document.getElementById('payment')
const paymentForm=document.getElementById('paymentForm')
const paymentButton=document.getElementById('paymentButton')
const footerLinkToInstagram=document.getElementById('linkToInstagram')
const footerLinkToWhatsApp=document.getElementById('linkToWhatsApp')
const itemCounter=document.getElementsByClassName('shop-container__items-item__icon-cant__counter')
const incItem=document.getElementsByClassName('more')
const decItem=document.getElementsByClassName('less')

// FUNCIONES

// CREA LOS ITEMS EN EL INDEX
const createItemsIndexDOM=(array, container)=>{
    for(let i=0; i<array.length; i++){
        let item=document.createElement('div')
        i!==0 ? item.className='carousel-item' : item.className='carousel-item active'
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

// CREA LOS ITEMS COMBOS EN EL SHOP
const createItemsCombosShopDOM=()=>{
    arrayCombos.forEach(element =>{
        let item=document.createElement('li')
        item.className='shop-container__items-item d-flex flex-column align-items-end w-100 h-100 p-4'
        item.innerHTML=`
            <div class="shop-container__items-item__icon d-flex justify-content-end align-items-center gap-4 w-100">
                <div class="shop-container__items-item__icon-cant d-flex align-items-center justify-content-around">            
                    <div class="shop-container__items-item__icon-cant__incDec less">-</div>
                    <span class="shop-container__items-item__icon-cant__counter">1</span>
                    <div class="shop-container__items-item__icon-cant__incDec more">+</div>
                </div>
                <div class="shop-container__items-item__icon-img">
                    <img src="../img/icons/shopping-cart-add.svg">
                </div>
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
        combosShopContainer.appendChild(item)
    })
}

// CREA LOS ITEMS DE BEBIDAS EN EL SHOP
const createItemsDrinksShopDOM=()=>{
    for(let i=1; i<typeItem.length; i++){
        let carouselItem=document.createElement('div')
        carouselItem.className='carousel-item w-100'
        i==1 && carouselItem.classList.add('active')
        carouselItem.innerHTML=`
            <div class="typeTitle">${typeItem[i].toLocaleUpperCase()}</div>
        `
        for(let b=0; b<arrayBebidas.length; b++){
            if(arrayBebidas[b].type==typeItem[i]){
                let item=document.createElement('div')
                item.className='shop-container__items-item d-flex flex-column align-items-end w-100 p-4'
                item.innerHTML=`
                <div class="shop-container__items-item__icon d-flex justify-content-end align-items-center gap-4 w-100">
                    <div class="shop-container__items-item__icon-cant d-flex align-items-center justify-content-around">            
                        <div class="shop-container__items-item__icon-cant__incDec less">-</div>
                        <span class="shop-container__items-item__icon-cant__counter">1</span>
                        <div class="shop-container__items-item__icon-cant__incDec more">+</div>
                    </div>
                    <div class="shop-container__items-item__icon-img">
                        <img src="../img/icons/shopping-cart-add.svg">
                    </div>
                </div>
                <div class="shop-container__items-item__cont d-flex align-items-center w-100 justify-content-between gap-3">
                    <div class="shop-container__items-item__cont-img drinks-bigImg">
                        <img src="../img/bebidas/solo/${arrayBebidas[b].img}" alt="">
                    </div>
                    <div class="shop-container__items-item__cont-info d-flex flex-column align-items-center gap-3">
                        <span class="shop-container__items-item__cont-info__name">${arrayBebidas[b].name}</span>
                        <div class="price d-flex align-items-center">
                            <span>$</span>
                            <span class="price-num">${arrayBebidas[b].price}</span>
                        </div>
                    </div>
                </div>
                `
                carouselItem.appendChild(item)
            }
        }
        drinksShopContainer.appendChild(carouselItem)
    }
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
    constructor(id, img, type, name, price){
        this.id=id
        this.img=img
        this.type=type
        this.name=name
        this.price=price
    }
}

// TIPOS DE BEBIDAS
const typeItem=['Combos', 'Cervezas', 'Aperitivos']

// COMBOS
const arrayCombos=[
    new Item('c1', 'fernetCoca.png', `${typeItem[0]}`, 'Fernet 1L + Coca Coca 2.25L', 2000),
    new Item('c2', 'smirnoffSprite.png', `${typeItem[0]}`, 'Smirnoff 750ml + Sprite 2.25L', 1700),
    new Item('c3', 'bombaySchweepes.png', `${typeItem[0]}`, 'Gin Bombay + Schweepes 2.25L', 1900),
]

// BEBIDAS
const arrayBebidas=[
    new Item('d1','andesRubia.png', `${typeItem[1]}`, 'Andes Rubia', 170),
    new Item('d2','ginBrighton.png', `${typeItem[2]}`, 'Gin Brighton', 1400),
    new Item('d3','smirnoffRaspberry.png', `${typeItem[2]}`, 'Vodka Smirnoff Raspberry', 1400),
    new Item('d5','absolut.png', `${typeItem[2]}`, 'Vodka Absolut', 1400),
]

/*----------------INDEX SECTION----------------*/
if(location.href.includes('index.html')){
    
    createItemsIndexDOM(arrayCombos, saleIndexContainer)
    createItemsIndexDOM(arrayBebidas, drinksIndexContainer)
}

/*----------------COMPRAR SECTION----------------*/
if(location.href.includes('shop.html')){

    arrayBebidas.push(
        new Item('d6','andesRoja.png', `${typeItem[1]}`, 'Andes Roja', 170),
        new Item('d7','andesNegra.png', `${typeItem[1]}`, 'Andes Negra', 170),
        new Item('d8','andesRosa.png', `${typeItem[1]}`, 'Andes Ipa Roja', 170),
        new Item('d9','andesVendimia.png', `${typeItem[1]}`, 'Andes Vendimia 2022', 170),
        new Item('d10','andesVerde.png', `${typeItem[1]}`, 'Andes Ipa Andina', 170),
        new Item('d11','budweiserBotella.png', `${typeItem[1]}`, 'Budweiser 750ml', 230),
        new Item('d12','fernetBranca.png', `${typeItem[2]}`, 'Fernet Branca 1L', 1700),
        new Item('d13','fernetBuhero.png', `${typeItem[2]}`, 'Fernet Buhero Negro 750ml', 1250),
        new Item('d14','ginBeefeater.png', `${typeItem[2]}`, 'Gin Beefeater', 1400),
        new Item('d15','budweiserLata.png', `${typeItem[1]}`, 'Budweiser', 160),
        new Item('d16','ginGordon.png', `${typeItem[2]}`, 'Gin Gordon', 1400),
        new Item('d17','jaggermeifter.png', `${typeItem[2]}`, 'Jaggermeifter', 1400),
        new Item('d18','smirnoff.png', `${typeItem[2]}`, 'Vodka Smirnoff', 1400),
        new Item('d19','smirnoffApple.png', `${typeItem[2]}`, 'Vodka Smirnoff Apple', 1400),
        new Item('d20','smirnoffCitric.png', `${typeItem[2]}`, 'Vodka Smirnoff Citric', 1400),
        new Item('d21','smirnoffWatermelon.png', `${typeItem[2]}`, 'Vodka Smirnoff Watermelon', 1400),
        new Item('d22','heinekenLata.png', `${typeItem[1]}`, 'Heineken', 180),
        new Item('d23','fernetBranca.png', `${typeItem[2]}`, 'Fernet Branca 750ml', 1400),
        new Item('d24','ginBombay.png', `${typeItem[2]}`, 'Gin Bombay', 1400),
    )
    
    arrayBebidas.sort((a, b) => a.name.localeCompare(b.name));

    createItemsCombosShopDOM()
    createItemsDrinksShopDOM()
    
    /*------------------EVENTOS--------------------*/
    const arrayItemsStorage=JSON.parse(localStorage.getItem('ITEMS'))
    const arrayAllItems=arrayCombos.concat(arrayBebidas)
    let itemsMessage=''
    let totalCarrito=0

    // ALMACENA ITEMS EN EL STORAGE Y AÑADE EL ITEM EN EL CONTAINER
    for (let i=0; i<arrayAllItems.length; i++) {
        shoppingCartItem_icon[i].addEventListener('click', () =>{
            const cantItems=itemCounter[i].innerHTML
            for(let ci=0; ci<cantItems; ci++){
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
            }
            Toastify({
                text: "Añadido con éxito",
                duration: 2500,
                style:{
                    background: "green",
                    boxShadow: "none",
                    fontWeight: "bold",
                    marginTop: "1rem"
                }
                }).showToast();
        })
        incItem[i].addEventListener('click', ()=>{
            let countItem=parseInt(itemCounter[i].innerHTML) + 1
            itemCounter[i].innerHTML=countItem
        })
        decItem[i].addEventListener('click', ()=>{
            if(itemCounter[i].innerHTML>'1'){
                let countItem=parseInt(itemCounter[i].innerHTML) -1
                itemCounter[i].innerHTML=countItem
            }
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

    
    // GENERA ORDEN DE COMPRA MEDIANTE MENSAJE DE WHATSAPP
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
            if(!userData.userName || !userData.userAdress || !userData.userPhone){
                Toastify({
                    text: "Ingrese sus datos correctamente, por favor.",
                    duration: 2500,
                    style:{
                        background: "yellow",
                        color: "black",
                        fontWeight: "bold",
                        boxShadow: "none",
                        marginTop: "1rem"
                    }
                }).showToast()
            } else{
                location.href=`https://api.whatsapp.com/send?phone=${phoneNumberWhatsapp}&text=*INFORMACIÓN%20DE%20COMPRA*%0ANombre:%20${userData.userName}%0ANumero%20de%20teléfono:%20${userData.userPhone}%0ADirección:%20${userData.userAdress}%0AMétodo%20de%20pago:%20${userData.userPayment}%0ABebidas:%0A${itemsMessage}%0ATOTAL:%20$${totalCarrito}`
            }
        }
        else{
            Toastify({
                text: "¡El carrito esta vacio!",
                duration: 2500, 
                style:{
                    background: "red",
                    boxShadow: "none",
                    fontWeight: "bold",
                    marginTop: "1rem"
                }

            }).showToast()
        }
    })

    // VACIA EL STORAGE Y REFRESCA LA PAGINA
    shoppingCartCleanButton.addEventListener('click', ()=>{
        Swal.fire({
            title: '¿Esta seguro de limpiar el carrito?',
            icon: 'warning',
            iconColor: 'black',
            showCancelButton: true,
            confirmButtonText: 'Si, limpiar.',
            cancelButtonText: 'No',
            buttonsStyling: false
        }).then((result)=>{
            if(result.isConfirmed){
                localStorage.clear()
                Swal.fire({
                    title: 'El carrito ha sido limpiado con éxito',
                    icon: 'success',
                    iconColor: 'black',
                    confirmButtonText: '<a href="../html/shop.html">OK</a>',
                    buttonsStyling: false
                })
            }
        })
    })
}

// LINKEA PERFIL DE INSTAGRAM Y NUMERO DE WHATSAPP EN EL FOOTER
footerLinkToInstagram.setAttribute('href', 'https://www.instagram.com')
footerLinkToWhatsApp.setAttribute('href', `https://api.whatsapp.com/send?phone=${phoneNumberWhatsapp}`)