// PRELOADER INDEX
hidePreloader(bodiesWithPreloader)

// CREA LOS ITEMS DEL INDEX
setTimeout(()=>{
    createCombosIndex()
    createDrinksIndex()
    createTypesBebidasIndex()
}, 500)

// REDIRIGE AL CAROUSEL DEL TIPO DE BEBIDA SELECCIONADO EN LA SECCION COMPRAR
setTimeout(()=>{
    for(let i=0; i<typeItemsContainerItems.length; i++){
        typeItemsContainerItems[i].addEventListener('click', ()=>{
            location.href='./html/shop.html'
        })
    }
}, 750)