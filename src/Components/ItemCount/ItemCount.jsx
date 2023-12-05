import React, { useState } from 'react'
import '../ItemCount/ItemCount.css'

const ItemCount = () => {
    const [count, setCount] = useState(0)
    const bajar = () => {
        setCount(count -1)
        if(count > 1) {
            setCount(count - 1)
        }
    }
    const subir = () =>{
        setCount(count + 1)
        if(count < 50) {
            setCount(count + 1)
        }
    } 
    return (
    <div className='contador'>
        <span>{count}</span>
        <button onClick={bajar}>bajar</button>
        <h1>Agregar al Carrito</h1>
        <button onClick={subir}>subir</button>
    </div>
    )
}

export default ItemCount
