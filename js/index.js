// PRELOADER INDEX
createPreloader(bodiesWithPreloader, '.')
hidePreloader(bodiesWithPreloader)
// setTimeout(()=>{
//     loaderIndex.classList.toggle('body__index-loader--hide')
//     body.style.overflow='auto'
// }, 1000)

// CREA LOS ITEMS DEL INDEX
createItemsIndexDOM(arrayCombos, saleIndexContainer)
createItemsIndexDOM(arrayBebidas, drinksIndexContainer)