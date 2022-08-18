arrayBebidas.push(
    new Item('andesRoja.png', `${typeItem[1]}`, 'Andes Roja', 170),
    new Item('andesNegra.png', `${typeItem[1]}`, 'Andes Negra', 170),
    new Item('andesRosa.png', `${typeItem[1]}`, 'Andes Ipa Roja', 170),
    new Item('andesVendimia.png', `${typeItem[1]}`, 'Andes Vendimia 2022', 170),
    new Item('andesVerde.png', `${typeItem[1]}`, 'Andes Ipa Andina', 170),
    new Item('budweiserBotella.png', `${typeItem[1]}`, 'Budweiser 750ml', 230),
    new Item('budweiserLata.png', `${typeItem[1]}`, 'Budweiser', 160),
    new Item('heinekenLata.png', `${typeItem[1]}`, 'Heineken', 180),
    new Item('fernetBranca.png', `${typeItem[2]}`, 'Fernet Branca 1L', 1700),
    new Item('fernetBuhero.png', `${typeItem[2]}`, 'Fernet Buhero Negro 750ml', 1250),
    new Item('ginBeefeater.png', `${typeItem[2]}`, 'Gin Beefeater', 1400),
    new Item('ginGordon.png', `${typeItem[2]}`, 'Gin Gordon', 1400),
    new Item('jaggermeifter.png', `${typeItem[2]}`, 'Jaggermeifter', 1400),
    new Item('smirnoff.png', `${typeItem[2]}`, 'Vodka Smirnoff', 1400),
    new Item('smirnoffApple.png', `${typeItem[2]}`, 'Vodka Smirnoff Apple', 1400),
    new Item('smirnoffCitric.png', `${typeItem[2]}`, 'Vodka Smirnoff Citric', 1400),
    new Item('smirnoffWatermelon.png', `${typeItem[2]}`, 'Vodka Smirnoff Watermelon', 1400),
    new Item('fernetBranca.png', `${typeItem[2]}`, 'Fernet Branca 750ml', 1400),
    new Item('ginBombay.png', `${typeItem[2]}`, 'Gin Bombay', 1400),
)

const arrayBebidasOrderName=arrayBebidas.sort((a, b) => a.name.localeCompare(b.name));
arrayBebidasOrderName.sort((a, b) =>b.type.localeCompare(a.type))

createItemsCombosShopDOM(arrayCombos)
createItemsDrinksShopDOM(arrayBebidasOrderName)

/*------------------EVENTOS--------------------*/
const arrayItemsStorage=JSON.parse(localStorage.getItem('ITEMS'))
const arrayAllItems=arrayCombos.concat(arrayBebidas)



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

buttonToPay.addEventListener('click', ()=>{
    if(cartShoppingCounter.innerHTML!=='0'){
        location.href='./payment.html'
    } else{
        Toastify({
            text: '¡El carrito esta vacío!',
            duration: 2500,
            style:{
                background: 'red',
                fontWeight: 'bold',
                boxShadow: 'none',
                marginTop: "1rem"
            }
        }).showToast()
    }
})