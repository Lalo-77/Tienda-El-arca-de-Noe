import React, { useEffect, useState } from 'react'
import {getProducts} from '../../Mock/asyncMock'
import ItemList from '../ItemList/ItemList'
import Principal from '../Principal/Principal'
import '../ItemListContainer/ItemListContainer.css'
import { useParams } from 'react-router-dom'

const ItemListContainer =({greeting}) => {
    const [products, setProducts] = useState ([]) // se guarda la respuesta
    const {categoryId}= useParams ()

    useEffect (() => {
        getProducts() // retorna una promesa setProducts(resp) 
            .then((resp) =>{
                if(categoryId){
                    setProducts(resp.filter((item)=>item.category === categoryId))
                }else{
                    setProducts(resp)
                }
            })
            .catch((error)=> console.log(error))
    }, [categoryId])
    
            return ( // es una mascara del virtual dom
                <div className='contenedor'>
                    <h1 style={{width:1000}} className='nombreTienda'>{greeting} <span>{categoryId && categoryId}</span></h1>
                    <Principal/>
                    <ItemList products={products}/>
                </div>
            )
        }

export default ItemListContainer
