// FUNCIONES

// HIDE PRELOADER
const hidePreloader=(body)=>{
    setTimeout(()=>{
        loader.classList.toggle('loader--hide')
        body.style.overflow='auto'
    }, 1000)
}

// CREA LOS ITEMS EN EL INDEX
const createCombosIndex=async()=>{
    const resp=await fetch("allItems.json")
    const data=await resp.json()
    const dataFilter=data.filter(item=>item.type=="Combos")
    for(let i=0; i<dataFilter.length; i++){
        let item=document.createElement('div')
        i==0 ? item.className='carousel-item active' : item.className='carousel-item'
        item.setAttribute('data-bs-interval', 3500)
        item.innerHTML=`
        <img src="./img/bebidas/carousel/${data[i].img}" class="d-block w-100" alt="...">
        <div class="carousel-caption d-md-block">
            <h5>${data[i].name}</h5>
            <p>$${data[i].price}</p>
        </div>
        `
        saleIndexContainer.appendChild(item)
    }
}

const createDrinksIndex=async()=>{
    const resp=await fetch("allItems.json")
    const data=await resp.json()
    const dataFilter=data.filter(item=>item.type!=="Combos")
    for(let i=0; i<dataFilter.length; i++){
        let item=document.createElement('div')
        i==0 ? item.className='carousel-item active' : item.className='carousel-item'
        item.setAttribute('data-bs-interval', 3500)
        item.innerHTML=`
        <img src="./img/bebidas/carousel/${dataFilter[i].img}" class="d-block w-100" alt="...">
        <div class="carousel-caption d-md-block">
            <h5>${dataFilter[i].name}</h5>
            <p>$${dataFilter[i].price}</p>
        </div>
        `
        drinksIndexContainer.appendChild(item)
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

const typeItem=['Combos', 'Cervezas', 'Aperitivos']
typeItem.sort()

// CREA LOS ITEMS DE BEBIDAS EN EL SHOP
const createItemsShop=async()=>{
    for(let i=0; i<typeItem.length; i++){
        let carouselItem=document.createElement('div')
        carouselItem.className='carousel-item w-100'
        i==0 && carouselItem.classList.add('active')
        carouselItem.innerHTML=`
            <div class="typeTitle">${typeItem[i].toLocaleUpperCase()}</div>
        `
        const resp=await fetch("../allItems.json")
        const data=await resp.json()
        const dataOrder=data.sort((a, b)=>a.name.localeCompare(b.name))
        dataOrder.forEach(element => {
            if(element.type==typeItem[i]){
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
