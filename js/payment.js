// STRING DE LOS ITEMS DEL CARRITO
let storedItems=localStorage.getItem('ITEMS') 
storedItems=JSON.parse(storedItems)
storedItems.sort((a, b)=> a.name.localeCompare(b.name))
let i=0;
let totalShoppingCart=0;
while(i<storedItems.length){
    let act=storedItems[i]
    let priceTot=0
    let cant=0
    let mes=''
    while( (i<storedItems.length)&&(act.name==storedItems[i].name)){
        priceTot+=storedItems[i].price
        totalShoppingCart+=storedItems[i].price
        cant++
        mes=`*(${cant})* *_${act.name} $${priceTot}_*`
        i++;
    }
    messageItems+=`${mes}${`%0A`}`
}

// MUESTRA TOASTIFY CUANDO HAY UN ERROR EN EL FORMULARIO
const showOrderError=()=>{
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
}

// CONFIRMA LA ORDEN Y REDIRIGE A WHATSAPP
const confirmOrder=(delivery, userData, deliveryMethod)=>{
    if(delivery){
        window.open(`https://api.whatsapp.com/send?phone=${phoneNumberWhatsapp}&text=🍻%20*CASA%20TOMADA%20-%20ORDEN%20DE%20COMPRA*%20🍻%0A%0A👋%20Nombre:%20*_${userData.userName}_*%0A📞%20Numero%20de%20teléfono:%20*_${userData.userPhone}_*%0A🛵%20Método%20de%20entrega:%20*_${deliveryMethod}_*%0A📌%20Dirección:%20*_${userData.userAdress}_*%0A🛒%20Productos%20seleccionados:%0A%0A${messageItems}%0A💳%20Método%20de%20pago:%20*_${userData.userPayment}_*%0A*💰%20TOTAL:%20$${totalShoppingCart}*`, '_blank')
        if(window.open){
            location.href='./afterPayment.html'
        }
    }else{
        window.open(`https://api.whatsapp.com/send?phone=${phoneNumberWhatsapp}&text=🍻%20*CASA%20TOMADA%20-%20ORDEN%20DE%20COMPRA*%20🍻%0A%0A👋%20Nombre:%20*_${userData.userName}_*%0A📞%20Numero%20de%20teléfono:%20*_${userData.userPhone}_*%0A🛵%20Método%20de%20entrega:%20*_${deliveryMethod}_*%0A🛒%20Productos%20seleccionados:%0A%0A${messageItems}%0A💳%20Método%20de%20pago:%20*_${userData.userPayment}_*%0A*💰%20TOTAL:%20$${totalShoppingCart}*`, '_blank')
        if(window.open){
            location.href='./afterPayment.html'
        }
    }
    localStorage.clear()
}

// SELECCIONA EL METODO DE ENTREGA
deliveryOption.addEventListener('click', ()=>{
    addresInput.classList.add('adressInput--show')
})
takeAwayOption.addEventListener('click', ()=>{
    addresInput.classList.remove('adressInput--show')
})

// GENERA ORDEN DE COMPRA MEDIANTE MENSAJE DE WHATSAPP
paymentForm.addEventListener('submit', (e)=>{
    e.preventDefault()
        const paymentOptions=document.getElementById('paymentOptions')
        const f=e.target
        let deliveryMethod;
        let delivery=false
        f[2].checked ? deliveryMethod=f[2].value : deliveryMethod=f[3].value
        const userData={
            userName: f[0].value,
            userPhone: parseInt(f[1].value),
            userDeliveryMethod: deliveryMethod.value,
            userAdress: f[4].value,
            userPayment: paymentOptions.options[paymentOptions.selectedIndex].text
        }
        if(deliveryMethod==f[2].value){
            if(!userData.userName || !userData.userPhone){
                showOrderError()
            } else{
                confirmOrder(delivery, userData, deliveryMethod)
            }
        } else{
            if(!userData.userAdress || !userData.userName || !userData.userPhone){
                showOrderError()
            } else{
                delivery=true
                confirmOrder(delivery, userData, deliveryMethod)
            }
        }
})

// VUELVE A LA SECCION DE COMPRAS
buttonBackToShop.addEventListener('click', ()=>{
    location.href='./shop.html'
})