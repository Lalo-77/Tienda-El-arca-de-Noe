import React, { useEffect, useState } from 'react'
import { getProducts } from '../../Mock/asyncMock'
import ItemList from '../ItemList/ItemList'
import Principal from '../Principal/Principal'
import '../ItemListContainer/ItemListContainer.css'
import { useParams } from 'react-router-dom'

const ItemListContainer =({greeting}) => {
    const [products, setProducts] = useState ([]) // se guarda la respuesta,un array
    const [loading, setLoading] = useState(false)
    const {categoryId} = useParams ()

    useEffect (() => {
        setLoading(true)
        getProducts() // retorna una promesa setProducts(resp) 
            .then((productos) => {
                if(categoryId){
                    setProducts(productos.filter((item)=> item.category === categoryId))
                }else{
                    setProducts(productos)
                }
            }) 
            .catch((error)=> console.log(error))
            .finally(()=> setLoading(false))
    },[categoryId])
    
            return ( // es una mascara del virtual dom
            <>
                { loading ? <p className='cargando'> Cargando ...</p>
                : <div className='contenedor'>
                    <h1 style={{width:1000}} className='nombreTienda'>{greeting} <span>{categoryId && categoryId}</span>El Arca</h1>
                    <Principal/>
                    <ItemList products={products}/>
                </div>
            }
            </>
            )
        }
export default ItemListContainer
