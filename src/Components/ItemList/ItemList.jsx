import React from 'react'
import Item from '../Item/Item'
import '../ItemList/ItemList.css'

const ItemList = ({products}) => {
    return (
            <div className='cards'>   
                {    // card de cada producto
                    products.map(product =>
                    <Item key={product.id} {...product}/>
                    )}
            </div>
        )
    }
export default ItemList
