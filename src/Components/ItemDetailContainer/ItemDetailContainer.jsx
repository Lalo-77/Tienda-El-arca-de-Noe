import React,{ useEffect, useState } from 'react'
import { getItem } from '../../Mock/asyncMock'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState ({})
    const { id } = useParams () // trae el dato que yo quiero
    
    useEffect (() =>{ // llamar a la funcion que llama a getItem
        getItem(id)
        .then((resp)=> setProducto (resp))
        .catch((error)=> console.log(error))
    }, [])
    
    return (
        <div>
            <h2 style={{fontSize:40, color:'blue', fontFamily: 'Times New Roman',}}>Estos son los productos que tenemos para tu mascota</h2>
            <div className='prod'> 
            <ItemDetail producto={producto}/>
            </div>
        </div>
    ) 
}
export default ItemDetailContainer

