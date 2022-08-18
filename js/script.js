// BURGER MENU
toggleMenuElement.addEventListener('click', ()=>{
    mainMenuElement.classList.toggle('navbar--show')
})

// LINKEA PERFIL DE INSTAGRAM Y NUMERO DE WHATSAPP EN EL FOOTER
footerLinkToInstagram.setAttribute('href', `${userInstagram}`)
footerLinkToWhatsApp.setAttribute('href', `https://api.whatsapp.com/send?phone=${phoneNumberWhatsapp}`)