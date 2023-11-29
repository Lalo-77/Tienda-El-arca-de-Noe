import React, { useEffect, useState } from 'react'
import {getProducts} from '../../asynMock'

const ItemListContainer =({greeting}) => {
    const [products, setProducts] = useState ([])

    useEffect (() => {
        getProducts()
            .then(response =>{
                setProducts(response) // una vez que tengo la resp despues la tengo que mostrar
            })
    }, [])
    console.log(products);

    const productsComponents = products.map(products => { 

        return (// card de cada producto
            <div> 
                <h2>{products.name}</h2> 
            </div>
        )
    })
    return ( // es una mascara del virtual dom
        <div>
            <h1>{greeting}</h1>
            {productsComponents}
        </div>
    


    )
}

export default ItemListContainer
