// FUNCIONES

// HIDE PRELOADER
const hidePreloader=(body)=>{
    setTimeout(()=>{
        loader.classList.toggle('loader--hide')
        body.style.overflow='auto'
    }, 1000)
}

// CREA LOS DIFERENTES TIPOS DE BEBIDAS EN FORMA DE BOTONES
const createTypesBebidasIndex=()=>{
    for(let i=0; i<arrayTypesBebidas.length; i++){
        let item=document.createElement('div')
        item.className='typeItems-container__item d-flex flex-column align-items-center gap-4 p-4'
        item.innerHTML=`
            <div class="typeItems-container__item-img">
                <img src="./img/icons/${arrayTypesBebidas[i]}.svg">
            </div>
            <p class="typeItems-container__item-name">${arrayTypesBebidas[i].toLocaleUpperCase()}</p>
        `
        typeItemsContainer.appendChild(item)
    }
}

// CREA LOS ITEMS EN EL INDEX
const createCombosIndex=()=>{
    const dataFilter=arrayItems.filter(item=>item.type=="Combos")
    for(let i=0; i<dataFilter.length; i++){
        if(arrayItems[i].nameImg!=="#"){
            let item=document.createElement('div')
            i==0 ? item.className='carousel-item active' : item.className='carousel-item'
            item.setAttribute('data-bs-interval', 3500)
            item.innerHTML=`
            <img src="./img/bebidas/carousel/${dataFilter[i].nameImg}" class="d-block w-100" alt="...">
            <div class="carousel-caption d-md-block">
                <h5>${dataFilter[i].name}</h5>
                <p>$${dataFilter[i].price}</p>
            </div>
            `
            saleIndexContainer.appendChild(item)
        }
    }
}

const createDrinksIndex=()=>{
    const dataFilter=arrayItems.filter(item=>item.type!=="Combos")
    for(let i=0; i<dataFilter.length; i++){
        if(arrayItems[i].nameImg!=='#'){
            let item=document.createElement('div')
            i==0 ? item.className='carousel-item active' : item.className='carousel-item'
            item.setAttribute('data-bs-interval', 3500)
            item.innerHTML=`
            <img src="./img/bebidas/carousel/${dataFilter[i].nameImg}" class="d-block w-100" alt="...">
            <div class="carousel-caption d-md-block">
                <h5>${dataFilter[i].name}</h5>
                <p>$${dataFilter[i].price}</p>
            </div>
            `
            drinksIndexContainer.appendChild(item)
        }
    }
}


const itemContent=(item, element, folderImg, classImg)=>{
    if(element.nameImg!=="#"){
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
                    <img src="../img/bebidas/${folderImg}/${element.nameImg}" alt="">
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
                    <div class="spinner d-flex justify-content-center align-items-center">
                        <div class="spinner-item"></div>
                    </div>
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
}

// CREA LOS ITEMS DE BEBIDAS EN EL SHOP
const createItemsShop=()=>{
    for(let i=0; i<arrayTypesBebidas.length; i++){
        let carouselItem=document.createElement('div')
        carouselItem.className='carousel-item w-100'
        carouselItem.setAttribute('id', `${arrayTypesBebidas[i].toLocaleLowerCase()}`)
        i==0 && carouselItem.classList.add('active')
        carouselItem.innerHTML=`
            <div class="typeTitle">${arrayTypesBebidas[i].toLocaleUpperCase()}</div>
        `
        const dataOrder=arrayItems.sort((a, b)=>a.name.localeCompare(b.name))
        dataOrder.forEach(element => {
            if(element.type==arrayTypesBebidas[i]){
                let item=document.createElement('div')
                item.className='shop-container__items-item d-flex flex-column align-items-end w-100 p-4'
                element.type!=='Combos' ? itemContent(item, element, 'solo', 'drinks-bigImg') : itemContent(item, element, 'combos')
                carouselItem.append(item)
            }
        });
        allDrinksContainer.append(carouselItem)
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
