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

const itemContent=(item, element, folderImg, classImg)=>{
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
            <div class="shop-container__items-item__cont-img ${classImg}">
                <img src="../img/bebidas/${folderImg}/${element.img}" alt="">
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

// CREA LOS ITEMS COMBOS EN EL SHOP
const createItemsCombosShopDOM=(array)=>{
    array.forEach(element =>{
        let item=document.createElement('li')
        item.className='shop-container__items-item d-flex flex-column align-items-end w-100 p-4'
        itemContent(item, element, 'combos')
        combosShopContainer.append(item)
    })
}

// CREA LOS ITEMS DE BEBIDAS EN EL SHOP
const createItemsDrinksShopDOM=(array)=>{
    for(let i=1; i<typeItem.length; i++){
        let carouselItem=document.createElement('div')
        carouselItem.className='carousel-item w-100'
        i==1 && carouselItem.classList.add('active')
        carouselItem.innerHTML=`
            <div class="typeTitle">${typeItem[i].toLocaleUpperCase()}</div>
        `
        for(let b=0; b<array.length; b++){
            if(array[b].type==typeItem[i]){
                let item=document.createElement('div')
                item.className='shop-container__items-item d-flex flex-column align-items-end w-100 p-4'
                itemContent(item, array[b], 'solo', 'drinks-bigImg')
                carouselItem.append(item)
            }
        }
        drinksShopContainer.append(carouselItem)
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
