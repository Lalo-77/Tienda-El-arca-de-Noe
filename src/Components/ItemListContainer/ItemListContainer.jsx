import React, { useEffect, useState } from 'react'
//import { getProducts } from '../../Mock/asyncMock'
import ItemList from '../ItemList/ItemList'
import Principal from '../Principal/Principal'
import '../ItemListContainer/ItemListContainer.css'
import { useParams } from 'react-router-dom'
import { getDocs, collection, query, where } from 'firebase/firestore'
import { db } from '../../services/firebase'

const ItemListContainer =({greeting}) => {
    const [products, setProducts] = useState ([]) // se guarda la respuesta,un array
    const [loading, setLoading] = useState(false)
    const {categoryId} = useParams ()

    /* (() => {
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
    },[categoryId])*/
    useEffect(() => {
        setLoading(true)
        const collectionProd = categoryId 
            ? query(collection(db, "productos"), where ('category', '==', categoryId))
            : collection(db, "productos")
        getDocs(collectionProd) //retorna una promesa
        .then(querySnapshot => {
        const productosAdap = querySnapshot.docs.map(doc => {
            const fields = doc.data()
            return { id: doc.id,...fields }
            })
            setProducts(productosAdap)
        })
        .catch(error => {
            console.log(error)
        }) 
        .finally(() => {
            setLoading(false)
        })
        },[categoryId])
    /*if(loading) {
        return <h1> Loading...</h1>
    }*/

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
