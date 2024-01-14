import React, { createContext, useContext, useState } from 'react'

export const CartContext = createContext ({
cart: [],
addItem: () => {},
isInCart: () => {}
})

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState ([])

    const addItem =(producto, quantity) => {
        if(!isInCart(producto.id)) {
        //console.log('el producto ya esta agregado');
        setCart(cart.map((producto) => {
        if(producto.id ===producto){
            return {...producto, quantity: producto.quantity + quantity}
        }else{
            return producto
        }
    }))
    }else {
        setCart([...cart, {...producto, quantity}])
    }
}
const clear = () => {
    setCart ([])
}
const isInCart = (productId) => {
    return cart.some(producto => producto.id === productId)
    }
    
const getItem = (productId) => {
}
const removeItem = (productId)=> {
    setCart(cart.filter(item => item.id !== productId))
}
const cartQuantity = () => { // suma la cantidad
    return cart.reduce ((acc, item) => acc + item.quantity, 0)
}
const total = () => { // suma el total
    return cart.reduce ((acc, item) => acc + item.quantity * item.price,0)
}

return (
    <CartContext.Provider value={{cart, addItem, clear, removeItem, isInCart, getItem, cartQuantity,total }}>
        {children}
    </CartContext.Provider>
    )}

    export const useCart = () => {
        return useContext (CartContext)
    }