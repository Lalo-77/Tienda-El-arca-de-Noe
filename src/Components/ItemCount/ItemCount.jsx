import React, { useState, useContext} from 'react'
import '../ItemCount/ItemCount.css'
import {CartContext} from '../../Context/CartContext'

const ItemCount = ({stock=50, onAdd, initial=1,removeItem,id}) => {
    const [count, setCount] = useState(initial);
    const [elec, setElec] = useState ();
    const {cart, setCart} = useState();

    const bajar = () => {
        if(count > 1) {
            setCount(count - 1)  
        }
    }
    const subir = () => {
        if(count  < stock) {
            setCount(count + 1)
        }
    }
    return (
        <div className='sup-cont'>
            <div className='contador'>
                <button className='bajar' onClick={bajar}>-</button> 
                <span className='contad'>{count}</span>
                <button className='subir' onClick={subir}>+</button>
            </div>
                <button className='comprar'disable={count === 1} onClick={()=>onAdd(count)}> Comprar </button>
{elec && (
                <button className='finalComp' onClick={() => {setElec({elec, count})}}> Finalizar Compra </button>
        )}
                <button className='eliminar' onClick={() => {removeItem(id)}}> Eliminar Producto</button>
        </div>  
    )
}
export default ItemCount
