import React, { useState } from 'react'
import '../ItemCount/ItemCount.css'

const ItemCount = ({stock=50, onAdd, initial=1,removeItem}) => {
    const [count, setCount] = useState(initial);
    const [elec, setElect] = useState ()
    const [cart, setCart] = useState ()

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
                <button className='comprar' onClick={ ()=> onAdd(count)} > Comprar </button>
{elec && (
                <button className='finalComp' onClick={() => {addItem({elec, cantidad})}}> Finalizar Compra </button>
        )}
                <button className='eliminar' onClick={() => {removeItem(cart.id)}}> Eliminar Producto</button>
        </div>  
    )
}
export default ItemCount
