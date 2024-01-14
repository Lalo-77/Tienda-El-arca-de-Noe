import React,{ useEffect, useState } from 'react'
import { getItem } from '../../Mock/asyncMock'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'  

const ItemDetailContainer = () => {// tiene la misma logica que itemlist pero trae un producto, es para la vista
    const [producto, setProducto] = useState ({}) // null
    const [loader, setLoader] = useState (false)
    const { id } = useParams () // trae el dato que yo quiero
    
    useEffect (() =>{ // llamar a la funcion que llama a getItem, guarda un producto
        setLoader (true)
        getItem(id) // getProductById
        .then((resp)=> setProducto (resp))
        .catch((error)=> console.log(error))
        .finally(() => setLoader(false))
    }, [id])
    
    return (
        <>
            <h2 style={{fontSize:40, color:'blue', fontFamily: 'Times New Roman',}}>3Estos son los productos que tenemos para tu mascota </h2>
            <div className='prod'> 
            { loader ? <p style={{color:'black', fontSize:30}}>Cargando... </p> :
                <ItemDetail producto={producto}/> 
            }
            </div>
        </>
    ) 
}
export default ItemDetailContainer

