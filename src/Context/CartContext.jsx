import React, { createContext, useContext, useState } from 'react'

export const CartContext = createContext ({
cart: [],
addItem: () => {},
isInCart: () => {}
})

export const CartProvider = ({children}) => {
const [cart, setCart] = useState ([])

const addItem =(producoToAdd) => {
    if(!isInCart(producoToAdd.id)) {
        setCart((prev) => [...prev, producoToAdd]);
        } else {
        console.error("El producto ya esta agregado");
    }
};
const clear = () => {
    setCart ([])
}
const clearCart = () => {
    setCart([])
}
const isInCart = (productId) => {
    return cart.some(producto => producto.id === productId)
    }
    
const getItem = (productId) => {
}
const removeItem = (productId)=> {
    const cartUpdated = cart.filter(item => item.id !== productId)
    setCart(cartUpdated)
}
const cartQuantity = () => { // suma la cantidad
    return cart.reduce ((acc, item) => acc + item.quantity, 0)
}
const getTotal = () => { 
    let accu = 0;
    cart.forEach((prod) => {
        accu += prod.price * prod.cantidad;
    });
    return accu;
}
const total = getTotal() // suma el total

return (
    <CartContext.Provider value={{cart, addItem, clear, removeItem, isInCart, getItem, cartQuantity, total, clearCart }}>
        {children}
    </CartContext.Provider>
    )}

    export const useCart = () => {
        return useContext (CartContext)
    }