class Item{
    constructor(img, type, name, price){
        this.img=img
        this.type=type
        this.name=name
        this.price=price
    }
}

// TIPOS DE BEBIDAS
const typeItem=['Combos', 'Cervezas', 'Aperitivos']

// COMBOS
const arrayCombos=[
    new Item('fernetCoca.png', `${typeItem[0]}`, 'Fernet 1L + Coca Coca 2.25L', 2000),
    new Item('smirnoffSprite.png', `${typeItem[0]}`, 'Smirnoff 750ml + Sprite 2.25L', 1700),
    new Item('bombaySchweepes.png', `${typeItem[0]}`, 'Gin Bombay + Schweepes 2.25L', 1900),
]

// BEBIDAS
const arrayBebidas=[
    new Item('andesRubia.png', `${typeItem[1]}`, 'Andes Rubia', 170),
    new Item('ginBrighton.png', `${typeItem[2]}`, 'Gin Brighton', 1400),
    new Item('smirnoffRaspberry.png', `${typeItem[2]}`, 'Vodka Smirnoff Raspberry', 1400),
    new Item('absolut.png', `${typeItem[2]}`, 'Vodka Absolut', 1400),
]
