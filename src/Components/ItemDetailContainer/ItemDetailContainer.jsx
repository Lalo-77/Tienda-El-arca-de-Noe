import React,{useEffect,useState} from 'react'
import { getItem } from '../../Mock/asyncMock'
import ItemDetail from '../ItemDetail/ItemDetail'

const ItemDetailContainer = () => {
    const [producto, setProducto] =useState ({})

    useEffect (() =>{
        getItem()
        .then((resp)=> setProducto (resp))
        .catch((error)=> console.log(error))
    },[])
    return (
    <div>
        <ItemDetail producto={producto}/>
    </div>
    )
}
export default ItemDetailContainer

