import React, { useState } from 'react'
import '../ItemCount/ItemCount.css'

const ItemCount = ({ stock=50, onAdd, initial=1, modifiBy}) => {

    const [count, setCount] = useState(initial);

    const bajar = () => {
        setCount((prev) => {
            if(prev > 1) {
                return prev - modifiBy;
            }   else {
                return prev;
            }
        });
        }
    const subir = () => {
        setCount((prev) => {
            if(count  < stock) {
                return prev + modifiBy;
            }   else {
                return prev;
            } 
        });
    }
    return (
        <div className='sup-cont'>
            <div className='contador'>
                <button className='bajar' onClick={bajar}>-</button> 
                <span className='contad'>{count}</span>
                <button className='subir' onClick={subir}>+</button>
            </div>
                <button className='comprar' onClick={()=>onAdd(count)}> Comprar </button>
                
        </div>  
    )
}
export default ItemCount
