import React, { useState } from 'react'
import '../ItemCount/ItemCount.css'

const ItemCount = ({stock, onAdd, initial}) => {
    const [count, setCount] = useState(initial)

    const bajar = () => {
        setCount(count -1)
        if(count > 0) {
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
        <div>
            <div className='contador'>
                <button onClick={bajar}>-</button>
                <span className='contad'>{count}</span>
                <button onClick={subir}>+</button>
            </div>
                <button className='comprar'disabled={count === 0} onClick={()=> onAdd(count)}>Comprar</button>
        </div>
    )
}

export default ItemCount
