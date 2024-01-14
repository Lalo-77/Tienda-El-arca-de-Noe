const productos = [
    {
    id:'01',
    name: 'plato acero',
    img: 'https://i.postimg.cc/sXDY9djs/plato-acero.png',
    price: 1985,
    category: 'accesorios',
    stock: 20,
    description: 'plato acero, medida 15 cm',
    },
    {
    id:'02',
    name:'comedero doble',
    img: 'https://i.postimg.cc/0NL6jTzV/comedero-doble.png',
    price: 9590,
    category: 'accesorios',
    stock: 20,
    description:'comedero doble con debedero automatico, antigoteo, diseño',
    },
    {
    id:'03',
    name:'bebedero hamster',
    img:'https://i.postimg.cc/4xj4QzXd/bebedero-hamster.png',
    price: 2500,
    category: 'accesorios',
    stock: 50,
    description:'acrilico, con pico acero 80 ml',
    },
    {
    id:'04',
    name:'collar luz leds',
    img: 'https://i.postimg.cc/VLVzzjrR/collar-luz-leds.png',
    price: 4554,
    category: 'accesorios',
    stock: 50,
    description:'collar ajustable con luz leds, medidas xs, s,m,l',
    },
    {
    id:'05',
    name:'correa extensible 3m',
    img: 'https://i.postimg.cc/PrLYYLZ4/correa-extensible-3m.png',
    price: 1914,
    category: 'accesorios',
    stock: 50,
    description:'correa extensible 3 m, economica',
    },
    {
    id:'06',
    name: 'pretal arnes',
    img: 'https://i.postimg.cc/RZ73Lw0c/pretal-arnes.jpg',
    price: 4700,
    category: 'accesorios',
    stock: 30,
    description: 'pretal con arnes mediano',
    },
{
    id:'07',
    name:'pelota',
    img: 'https://i.postimg.cc/PJvJpwcv/pelota.png',
    price: 2570,
    category: 'juguetes',
    stock: 30,
    description:'juguete soga con pelota, 30 cm',
    },
    {
    id:'08',
    name:'cucha',
    img:'https://i.postimg.cc/YqgNTG9S/cama.png',
    price: 11475,
    category: 'accesorios',
    stock: 20,
    description:'cucha moises, medidas 60 cm x 50 cm',
    },
    {
    id:'09',
    name:'manta mascota',
    img: 'https://i.postimg.cc/bvYQGmRG/manta-mascota.png',
    price: 5400,
    category:'ropa',
    stock: 20,
    description:'manta para mascota gruesa de polar, medidas 50 cm x 70 cm',
    },
    {
    id:'10',
    name:'bolso',
    img:'https://i.postimg.cc/63gRmtxR/bolso.png',
    price: 14175,
    category: 'accesorios',
    stock: 30,
    description:'bolso para transporte de mascotas, medidas 45 cm x 28 cm',
    },
    {
    id:'11',
    name: 'mochila',
    img: 'https://i.postimg.cc/XN5yvM0H/mochila.png',
    price: 25380,
    category: 'accesorios',
    stock: 20,
    description:'mochila hello cat, transpotadora',
    },
    {
    id:'12',
    name:'cepillo acero',
    img:'https://i.postimg.cc/8cqJJxXp/cepillo-acero.png',
    price: 2250,
    category: 'limpieza',
    stock: 50,
    description:'cepillo ovalado de acero para perro',
    },
    {
    id:'13',
    name:'cepillo silicona',
    img: 'https://i.postimg.cc/ZRnCfJ1Y/cepillo-silicona.png',
    price: 1350,
    category: 'limpieza',
    stock: 50,
    description: 'cepillo de silicona para shampoo medidas 9 cm',
    },
    {
    id:'14',
    name:'gorro orejas',
    img: 'https://i.postimg.cc/2SX6Vs1P/gorro-orejas.png',
    price: 3375,
    category:'ropa',
    stock: 20,
    description:'gorro mascota con orejas de polar',
    },
    {
    id: '15',
    name: 'zapatillas',
    img: 'https://i.postimg.cc/L8h4Kxxv/zapatillas.png',
    price: 4340,
    category: 'ropa',
    stock: 20,
    description: 'zapatillas para mascota, talle s al xl'
    }
]
export const getProducts = () => { // trae los productos
    return new Promise((resolve,reject) => {
        let error = false
        setTimeout(() => {
            if (error) {
                reject('No Hay datos, intente en unos minutos...')
            }else {
                resolve(productos)
            }
        }, 2000)
    }) 
}

export const getItem =(id) =>{ // trae un item
    return new Promise((resolve) =>{
        setTimeout(()=> {
            resolve(productos.find((producto) => producto.id === id)) // el find devuelve la 1° coincidecia
        },2000) // el find trae el elemento que encontro 
    })
}  

