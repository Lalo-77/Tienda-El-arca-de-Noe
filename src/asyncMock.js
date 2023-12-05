const products = [
    {
    id:'01',
    name:'bandeja',
    img:'../public/img/bandeja.bmp',
    price: 4554,
    category: 'accesorio',
    stock: 50,
    description:'bandeja chica para gato, varios colores, medidas 34cm, 24 cm, 7 mm',
    },
    {
    id:'02',
    name:'bebedero',
    img:'../public/img/bebedero automatico.bmp',
    price: 1559,
    category: 'accesorio',
    stock: 50,
    description: 'bebedero automatico 250 ml',
    },
    {
    id:'03',
    name:'bebedero hamster',
    img:'../public/img/bebedero hamster.bmp',
    price: 1914,
    category: 'accesorio',
    stock: 50,
    description:'acrilico, con pico acero 80 ml',
    },
    {
    id:'04',
    name:'bolso',
    img:'../public/img/bolso.bmp',
    price: 14175,
    category: 'accesorio',
    stock: 30,
    description:'bolso para transporte de mascotas, medidas 45 cm x 28 cm',
    },
    {
    id:'05',
    name:'cadena perro',
    img:'../src/public/cadena perro.bmp',
    price: 1488,
    category: 'accesorio',
    stock: 50,
    description:'cadena de paseo acero reforzado, medida 1.2 m x 3 mm',
    },
    {
    id:'06',
    name:'cama',
    img:'../public/img/cama.bmp',
    price: 11475,
    category: 'accesorio',
    stock: 20,
    description:'cama moises, medidas 60 cm x 50 cm',
    },
    {
    id:'07',
    name:'cepillo acero',
    img:'../src/assets/img/cepillo acero.bmp',
    price: 2250,
    category: 'accesorio',
    stock: 50,
    description:'cepillo ovalado de acero para perro',
    },
    {
    id:'08',
    name:'cepillo silicona',
    img: '../public/img/cepillo silicona.bmp',
    price: 1350,
    category: 'accesorio',
    stock: 50,
    description: 'cepillo de silicona para shampoo medidas 9 cm',
    },
    {
    id:'09',
    name:'collar luz leds',
    img: '../public/img/collar luz leds.bmp',
    price: 4554,
    category: 'accesorio',
    stock: 50,
    description:'collar ajustable con luz leds, medidas xs, s,m,l',
    },
    {
    id:'10',
    name:'collar ahorque',
    img: '../public/img/collar-ahorque.bmp',
    price: 1550,
    category: 'accesorio',
    stock: 50,
    description:'collar ahorque salvapelo, medidas 4 mm x 70 cm',
    },
    {
    id:'11',
    name:'collar',
    img: '../public/img/collar.bmp',
    price: 3544,
    category: 'accesorio',
    stock: 50,
    description:'collar para gatos y perros con cascabel, colores rojo, plateado, azul, rojo',
    },
    {
    id:'12',
    name:'comedero doble',
    img: '../public/img/comedero doble.bmp',
    price: 9590,
    category: 'accesorio',
    stock: 20,
    description:'comedero doble con debedero automatico, antigoteo, diseño',
    },
    {
    id:'13',
    name:'comedero gato ',
    img: '../public/img/comedero gato.bmp',
    price: 320,
    category: 'accesorio',
    stock: 50,
    description:'comedero mini para gato, plastico',
    },
    {
    id:'14',
    name:'correa extensible 3m',
    img: '../public/img/correa extensible 3m.bmp',
    price: 1914,
    category: 'accesorio',
    stock: 50,
    description:'correa extensible 3 m, economica',
    },
    {
    id:'15',
    name:'correa pretal',
    img: '../public/img/correa pretal.bmp',
    price: 2560,
    category:'accesorio',
    stock: 50,
    description:'correa con pretal alitas, medidas 1 cm x 120 cm',
    },
    {
    id:'16',
    name:'funda cubre asiento',
    img: '../public/img/funda cubre asiento 2.bmp',
    price: 9180,
    category:'accesorio',
    stock: 20,
    description:'funda cubre asiento de material impermeable, medidas 135 cm x 140 cm',
    },
    {
    id:'17',
    name:'gorro orejas',
    img: '../public/img/gorro orejas.bmp',
    price: 3375,
    category:'accesorio',
    stock: 20,
    description:'gorro mascota con orejas de polar',
    },
    {
    id:'18',
    name: 'limpia pata',
    img: '../public/img/limpia pata.bmp',
    price: 4590,
    category: 'limpieza',
    stock:50,
    description:'limpia pata 15 cm x 10 cm',
    },
    {
    id:'19',
    name:'manta mascota',
    img: '../public/img/manta mascota.bmp',
    price: 5400,
    category:'accesorio',
    stock: 20,
    description:'manta para mascota gruesa de polar, medidas 50 cm x 70 cm',
    },
    {
    id:'20',
    name: 'mochila',
    img: '../public/img/mochila.bmp',
    price: 25380,
    category: 'accesorio',
    stock: 20,
    description:'mochila hello cat, transpotadora',
    },
    {
    id:'21',
    name:'moises',
    img: '../public/img/moises.bmp',
    price: 11820,
    category:'accesorio',
    stock: 10,
    description: 'moises nido, materiles algodon, medida 50 cm',
    },
    {
    id:'22',
    name: 'plato acero',
    img: '../public/img/plato acero.bmp',
    price: 1985,
    category: 'accesorio',
    stock: 20,
    description: 'plato acero, medida 15 cm',
    },
    {
    id:'23',
    name: 'pretal arnes',
    img: '../public/img/pretal arnes.bmp',
    price: 4700,
    category: 'accesorio',
    stock: 30,
    description: 'pretal con arnes mediano',
    },
    {
    id:'24',
    name:'pretal reflactaria',
    img: '../public/img/pretal reflactaria.bmp',
    price: 4860,
    category: 'accesorio',
    stock: 30,
    description: 'pretal reflactaria  + soga con mango acolchonado',
    },
    {
    id: '25',
    name: 'zapatilla',
    img: '../public/img/zapatillas.bmp',
    price: 4340,
    category: 'ropa',
    stock: 20,
    description: 'zapatillas para mascota, talle s al xl'
    }
]
export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 2000)
    })
}