import React, { useState } from 'react'
import {useCart} from '../../Context/CartContext'

function Checkout (){
    const [name, setName]= useState("")
    const [email, setEmail]= useState("")
    const [phone, setPhone]= useState("")
    
    const [orderId , setOrderId ] = useState();
    
    const { cart, total, clear } = useCart ();
    
    function crearOrden () {
    
    const db = getFirestore()
    const order= {buyer:{
            name, email, phone,
            },
        };
    const ordenesRef = collection (db, ordenes);
        addDoc(ordenesRef, order).then (result => setOrderId (result.Id))
    }
    if(orderId) {
        return 
        //<h1> {`Gracias por tu compra, tu Id de pedido es ${orderId}`} </h1>
    }
    return(
        <form>
            <label>name</label>
            <input type="text" value = {name} onChange={(evento) => setName(evento.target.value)}/>
            <label></label>
            <input type="text" value = {email} onChange={(evento) => setEmail(evento.target.value)}/>
            <label></label>
            <input type="text" value = {phone} onChange={(evento) => setPhone(evento.target.value)}/>
            <button onClick={crearOrden} type='submit'>Finalizar Compra</button>
        </form>
        )
    }

export default Checkout