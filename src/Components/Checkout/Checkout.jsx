import React, { useState } from 'react'
import { useCart } from '../../Context/CartContext'
import { db } from '../../services/firebase'
import { collection } from 'firebase/firestore'
import './Checkout.css' 

function Checkout (){
    const [name, setName]= useState("")
    const [email, setEmail]= useState("")
    const [phone, setPhone]= useState("")
    
    const [orderId , setOrderId ] = useState();
    
    const { cart, total } = useCart ();
    
    function crearOrden () {
    
    const order= {
        buyer:{
            name, email, phone,
            },
            items: cart,
            total: total,
            date: Timestamp.fromDate (new Date())
        };
    const ordenesRef = collection (db, ordenes);
        addDoc(ordenesRef, order).then (result => setOrderId (result.Id))
    }
    if(orderId) {
        return (
            <h1> {`Gracias por tu compra, tu Id de pedido es ${orderId}`} </h1>
        )
    }
    return(
        <form className='form'>
                <legend className='formulario'>Ingresa tus datos personales</legend>
                <label className='pila'>
                    <span > Nombre y Apellido: </span>
                    <input type="text" value = {name} onChange={(evento) => setName(evento.target.value)} className='nombYap'placeholder="ingresa tu Nombre y Apellido"/>
                </label>
                <label className='email'>
                    <span> mail: </span>
                    <input type="text" value = {email} onChange={(evento) => setEmail(evento.target.value )} className='correo'placeholder="ingresa tu mail required"/>
                </label>
                <label className='telefono'>
                    <span>telefono:</span>
                    <input type="text" value = {phone} onChange={(evento) => setPhone(evento.target.value)} className='tel'placeholder="ingresa tu Telefono"/>
                </label>
                <button className='crearOrden' onClick={crearOrden} type='submit'>Finalizar Compra</button>
        </form>
        )
    }

export default Checkout