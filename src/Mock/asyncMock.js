const productos = [
    {
    id:'01',
    name: 'plato acero',
    img: '../../img/plato acero.bmp',
    price: 1985,
    category: 'accesorios',
    stock: 20,
    description: 'plato acero, medida 15 cm',
    },
    {
    id:'02',
    name:'comedero doble',
    img: '../../img/comedero doble.bmp',
    price: 9590,
    category: 'accesorios',
    stock: 20,
    description:'comedero doble con debedero automatico, antigoteo, diseño',
    },
    {
    id:'03',
    name:'bebedero hamster',
    img:'../../img/bebedero hamster.bmp',
    price: 2500,
    category: 'accesorios',
    stock: 50,
    description:'acrilico, con pico acero 80 ml',
    },
    {
    id:'04',
    name:'collar luz leds',
    img: '../../img/collar luz leds.bmp',
    price: 4554,
    category: 'accesorios',
    stock: 50,
    description:'collar ajustable con luz leds, medidas xs, s,m,l',
    },
    {
    id:'05',
    name:'correa extensible 3m',
    img: '../../img/correa extensible 3m.bmp',
    price: 1914,
    category: 'accesorios',
    stock: 50,
    description:'correa extensible 3 m, economica',
    },
    {
    id:'06',
    name: 'pretal arnes',
    img: '../../img/pretal-arnes.jpg',
    price: 4700,
    category: 'accesorios',
    stock: 30,
    description: 'pretal con arnes mediano',
    },
{
    id:'07',
    name:'pelota',
    img: '../../img/pelota.bmp',
    price: 2570,
    category: 'juguetes',
    stock: 30,
    description:'juguete soga con pelota, 30 cm',
    },
    {
    id:'08',
    name:'cama',
    img:'../../img/cama.bmp',
    price: 11475,
    category: 'accesorios',
    stock: 20,
    description:'cama moises, medidas 60 cm x 50 cm',
    },
    {
    id:'09',
    name:'manta mascota',
    img: '../../img/manta mascota.bmp',
    price: 5400,
    category:'ropa',
    stock: 20,
    description:'manta para mascota gruesa de polar, medidas 50 cm x 70 cm',
    },
    {
    id:'10',
    name:'bolso',
    img:'../../img/bolso.bmp',
    price: 14175,
    category: 'accesorios',
    stock: 30,
    description:'bolso para transporte de mascotas, medidas 45 cm x 28 cm',
    },
    {
    id:'11',
    name: 'mochila',
    img: '../../img/mochila.bmp',
    price: 25380,
    category: 'accesorios',
    stock: 20,
    description:'mochila hello cat, transpotadora',
    },
    {
    id:'12',
    name:'cepillo acero',
    img:'../../img/cepillo acero.bmp',
    price: 2250,
    category: 'limpieza',
    stock: 50,
    description:'cepillo ovalado de acero para perro',
    },
    {
    id:'13',
    name:'cepillo silicona',
    img: '../../img/cepillo silicona.bmp',
    price: 1350,
    category: 'limpieza',
    stock: 50,
    description: 'cepillo de silicona para shampoo medidas 9 cm',
    },
    {
    id:'14',
    name:'gorro orejas',
    img: '../../img/gorro orejas.bmp',
    price: 3375,
    category:'ropa',
    stock: 20,
    description:'gorro mascota con orejas de polar',
    },
    {
    id: '15',
    name: 'zapatilla',
    img: '../../img/zapatillas.bmp',
    price: 4340,
    category: 'ropa',
    stock: 20,
    description: 'zapatillas para mascota, talle s al xl'
    }
]
export const getProducts = () => { 
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
            resolve(productos.find((item) => item.id === id)) // el find devuelve la 1° coincidecia
        },2000) // el find trae el elemento que encontro 
    })
}  

