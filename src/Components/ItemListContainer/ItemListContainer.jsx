import React, { useEffect, useState } from 'react'
import {getProducts} from '../../Mock/asyncMock'
import ItemList from '../ItemList/ItemList'
import Principal from '../Principal/Principal'
import '../ItemListContainer/ItemListContainer.css'

const ItemListContainer =({greeting}) => {
    const [products, setProducts] = useState ([]) // se guarda la respuesta

    useEffect (() => {
        getProducts() // retorna una promesa 
            .then(resp => {
                setProducts(resp) // una vez que tengo la resp despues la tengo que mostrar
            })
    }, [])
        console.log(products);
            return ( // es una mascara del virtual dom
                <div className='contenedor'>
                    <h1 className='nombreTienda'>{greeting}</h1>
                    <Principal/>
                    <ItemList products={products}/>
                </div>
            )
        }

export default ItemListContainer
