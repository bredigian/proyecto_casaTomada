// PRELOADER SHOP
hidePreloader(bodiesWithPreloader)

setTimeout(()=>{
    createItemsShop()
}, 500)

/*------------------EVENTOS--------------------*/
setTimeout(()=>{
    arrayItems.sort((a, b)=>a.type.localeCompare(b.type))
}, 500)

// ALMACENA ITEMS EN EL STORAGE Y AÑADE EL ITEM EN EL CONTAINER
setTimeout(()=>{
    for(let i=0; i<arrayItems.length; i++){
        shoppingCartItem_icon[i].addEventListener('click', () =>{
            const cantItems=itemCounter[i].innerHTML
            for(let ci=0; ci<cantItems; ci++){
                cartShoppingCounter.innerHTML=parseInt(cartShoppingCounter.innerHTML)+1
                const itemsStorage=localStorage.getItem('ITEMS')
                let itemsStorageParsed=[]
                if(itemsStorage){
                    itemsStorageParsed=JSON.parse(itemsStorage)
                }
                itemsStorageParsed.push(arrayItems[i])
                localStorage.setItem('ITEMS', JSON.stringify(itemsStorageParsed))
                createItemContainerShoppingCart(arrayItems[i])
                totalCarrito+=arrayItems[i].price
                shoppingCartTotal.innerHTML=`TOTAL $${totalCarrito}`
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
}, 750)

// OBTIENE LOS ITEMS ALMACENADOS EN EL STORAGE Y LOS AÑADE AL CONTAINER
const arrayItemsStorage=JSON.parse(localStorage.getItem('ITEMS'))
if(arrayItemsStorage){
    arrayItemsStorage.forEach(element => {
        createItemContainerShoppingCart(element)
        totalCarrito+=element.price
        shoppingCartTotal.innerHTML=`TOTAL $${totalCarrito}`
        cartShoppingCounter.innerHTML=parseInt(cartShoppingCounter.innerHTML)+1
    });
}

// ABRE Y CIERRA CONTAINER DE LOS ITEMS SELECCIONADOS
shoppingCartButtonShowContainer.addEventListener('click', ()=>{
    shoppingCartContainer.classList.toggle('cartShopping-container--show')
    shoppingCartButtonShowContainer.classList.toggle('cartShopping-btnShowContainer--rotate')
})

// VACIA EL STORAGE
shoppingCartCleanButton.addEventListener('click', ()=>{
    if(cartShoppingCounter.innerHTML!=='0'){
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
                totalCarrito=0
                Swal.fire({
                    title: 'El carrito ha sido limpiado con éxito',
                    icon: 'success',
                    iconColor: 'black',
                    buttonsStyling: false
                })
                cartShoppingCounter.innerHTML='0'
                shoppingCartTotal.innerHTML='TOTAL $0'
                shoppingCartContainerItems.innerHTML=''
                shoppingCartContainer.classList.toggle('cartShopping-container--show')
                shoppingCartButtonShowContainer.classList.toggle('cartShopping-btnShowContainer--rotate')
            }
        })
    } else{
        Swal.fire({
            title: 'No es posible limpiar el carrito porque esta vacío.',
            icon: 'error',
            iconColor: 'black',
            buttonText: 'OK',
            buttonsStyling: false
        })
    }
})

// ACCEDE A LA SECCION PARA REALIZAR LA ORDEN
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