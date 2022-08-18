if(!localStorage.length){
    location.href='./shop.html'
}
let storedItems=localStorage.getItem('ITEMS') 
storedItems=JSON.parse(storedItems)
for(let i=0; i<storedItems.length; i++){
    messageItems+=`${storedItems[i].name} - $${storedItems[i].price}${`%0A`}`
    totalShoppingCart+=storedItems[i].price
}
// GENERA ORDEN DE COMPRA MEDIANTE MENSAJE DE WHATSAPP
paymentForm.addEventListener('submit', (e)=>{
    e.preventDefault()
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
            location.href=`https://api.whatsapp.com/send?phone=${phoneNumberWhatsapp}&text=*INFORMACIÓN%20DE%20COMPRA*%0ANombre:%20${userData.userName}%0ANumero%20de%20teléfono:%20${userData.userPhone}%0ADirección:%20${userData.userAdress}%0AMétodo%20de%20pago:%20${userData.userPayment}%0ABebidas:%0A${messageItems}%0ATOTAL:%20$${totalShoppingCart}`
        }
    localStorage.clear()
})
buttonBackToShop.addEventListener('click', ()=>{
    location.href='./shop.html'
})