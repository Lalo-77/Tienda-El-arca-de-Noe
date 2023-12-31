import React from 'react'
import Item from '../Item/Item'
import './ItemList.css'

const ItemList = ({products}) => {
    return (
            <div className='card'>   
                {products.map(product => <Item key={product.id} product={product}/> // spread de product
                    )}
            </div> 
        ) 
    }
export default ItemList
