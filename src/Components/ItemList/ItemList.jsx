import React from 'react'
import Item from '../Item/Item'
import './ItemList.css'

const ItemList = ({products}) => {
    return (
            <div className='card'>   
                {    // card de cada producto
                    products.map(product => 
                    <Item key={product.id} {...product}/> // spread de product
                    )}
            </div>
        )
    }
export default ItemList
