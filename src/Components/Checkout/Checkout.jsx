import React, { useState, useContext } from 'react'
import CartContext from '../../Context/CartContext'

const Checkout = () => {
    const [user, setUser] = useState ({})
    const [validateEmail, setValidateEmail]= useState ('')
const {cart, total, clear} = useContext(CartContext)

    return (
    <div>
        <h2>Terminar Compra</h2>
        <h4> Completar con sus datos Personales</h4>
        <form onSubmit={finalizarCompra}>
            <div>
                <label>Nombre Completo</label>
                <input onChange={datosComprador}type='text' placeholder='nombre y apellido' name='name'/>
            </div>
            <div>
                <label>Numero de telefono</label>
                <input onChange={datosComprador}type='number' placeholder='+549003467842' name='phone'/>
            </div>
            <div>
                <label>Direccion de email</label>
                <input onChange={datosComprador}type='email' placeholder='papa@.com' name='mail'/>
            </div>
            <div>
                <label>Repita su email email</label>
                <input type='email' placeholder='papa@.com' name='mail' onChange={((e)=>setValidateEmail(e.target.value))}/>
            </div>
            <button type='submit'disabled={validateEmail !== user.mail}>Generar Orden</button>
        </form>
    </div>
    )
}

export default Checkout
