import React, { useEffect, useState } from 'react'
//import { getProducts } from '../../Mock/asyncMock'
import ItemList from '../ItemList/ItemList'
import Principal from '../Principal/Principal'
import '../ItemListContainer/ItemListContainer.css'
import { useParams } from 'react-router-dom'
import { getDocs, collection, query, where } from 'firebase/firestore'
import { db } from '../../services/firebase'
import { Toaster, toast } from 'sonner'

const ItemListContainer =({greeting}) => {
    const [productos, setProductos] = useState ([]) // se guarda la respuesta,un array
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
        getDocs(collectionProd) // retorna una promesa- de donde va a sacar los documentos a los productos 
            .then(querySnapshot => {
                const productosAdap = querySnapshot.docs.map(doc => {
                const fields = doc.data()
                return { id: doc.id,...fields } 
            })
            setProductos(productosAdap)
        }) 
        .catch(error => {
            toast.error(error)
        }) 
        .finally(() => {
            setLoading(false)
        })
        },[categoryId])
    if(loading) {
        return <h1 className='loading'>Cargando...</h1> // es una mascara del virtual dom
    }
            return ( 
            <>
                { loading ? <p className='cargando'> Cargando ...</p>
                : <div className='contenedor'>
                    <h1 style={{width:1000}} className='nombreTienda'>{greeting} <span>{categoryId && categoryId}</span></h1>
                    <Principal/>
                    <ItemList productos={productos}/>
                </div>
            }
            </>
            )
        }
        <Toaster />
export default ItemListContainer
