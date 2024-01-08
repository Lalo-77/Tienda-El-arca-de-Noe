import React, { createContext, useState } from 'react'

export const CartContext = createContext ({
cart: [],
addItem: () => {},
isInCart: () => {}
})
export const CartProvider = ({children}) => {

const [cart, setCart] = useState ([])
console.log(cart);


//const {item, setItem } = useState(0) 
//const [cartList, setCartList] = useState([])

const addItem = (item) => {
  if (isInCart(item.id)){
      setCart(cart.map ((producto) => {
        if (producto.id ===item.id){
      return{...producto,cantidad:producto.cantidad + cantidad} 
  } else {
          return producto
          }
      }))
      console.log('ya esta en el carrito');
    }else{
      setCart([...cart, {...item,cantidad}]);
    }
const isInCart = (productId)=> { // esta en el carrito
  return cart.some(prod => prod.id === productId)
} 

const getItem = (productId) => {
}
const removeItem = (productId) => {
  const cartUpdated = cart.filter (prod => prod.id !== productId) 
          setCart(cartUpdated)
}
const getTotalCantidad = () => {
    let accu = 0

      cart.forEach(prod => {
      accu += prod.cantidad
    })
    return accu
  }
const cantidad = cart.reduce((acc, agre) => { // reduce entrega la suma total
        return acc + agre.cantidad;
    }, 0);
    useEffect(() => {
      updateTotalProductsAdded()
      updateTotalToPay()
  }, [cart]) 

const clear = () =>{
          setCart([])
      }
  const totalProducts = getTotalCantidad () 

  const getTotal = () => {
    let accu = 0
    cart.forEach(prod => {
        count += prod.cantidad * prod.price
    })
  return accu
}
const total = getTotal() 

  return (
    <CartContext.Provider value = {{cart,setCart, isInCart, addItem, getItem, removeItem, clear, total}}>
      {children}
    </CartContext.Provider>
  )}
}
export default CartContext

/*const cartCantidad =()=> { //funcion que va a sumar
  return cart.reduce((acc, item) => acc + item.cantidad, 0)
}*/
