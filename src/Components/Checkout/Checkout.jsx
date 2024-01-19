import React, { useState } from 'react'
import { useCart } from '../../Context/CartContext'
import { db } from '../../services/firebase'
import { addDoc, getDocs, collection, getFirestore, query, where, documentId, writeBatch } from 'firebase/firestore'
import './Checkout.css' 
import {Link} from 'react-router-dom'
import {Toaster, toast} from 'sonner'

function Checkout (userData){
    const [loading, setLoading] = useState (false)
    const [name, setName]= useState("")
    const [email, setEmail]= useState("")
    const [phone, setPhone]= useState("")
    const [orderId , setOrderId ] = useState();

    const { cart, total, clearCart } = useCart ();

    //const Timestamp = Timestamp.fromDate(new Date());

    const createOrder = async (userData) => {
        try {
            setLoading(true)
            const objOrder = {
                buyer: {
                    name:  userData.name,
                    phone: userData.phone,
                    email: userData.email,
                },
                items: cart,
                total,
                //date: Timestamp.fromDate (new Date())
            }
            const batch = writeBatch(db)
            const outOfStock = []
    
            const ids = cart.map(prod => prod.id)
    
            const productsCollection = query(collection(db, 'products'), where(documentId(), 'in', ids))
    
            const { docs } = await getDocs(productsCollection)
    
            docs.forEach(doc => {
                const dataDoc = doc.data()
                const stockDb = dataDoc.stock
    
                const productAddedToCart = cart.find(prod => prod.id === doc.id)
                const prodQuantity = productAddedToCart?.quantity
    
                if(stockDb >= prodQuantity) {
                    batch.update(doc.ref,{ stock: stockDb - prodQuantity})
                } else {
                    outOfStock.push({ id: doc.id, ...dataDoc })
                }
            })
    
            if(outOfStock.length === 0) {
                batch.commit()
    
                const ordersCollection = collection(db, 'orders')
                
                const { id } = await addDoc(ordersCollection, objOrder)
                
                clearCart()
                setOrderId(id)
            } else {
                ('error', 'Hay productos que no tienen stock disponible')
            }
            } catch (error){
                ('error', 'Hubo un error generando la orden: ' + error.message)
            } finally {
            setLoading(false)
        }
        
    }
    if(loading) {
        return <h1 className='exito'>Se esta generando su orden...</h1>
    }
    if(orderId) {
        return <h1 className='numComp'>El ID de su orden es: {orderId}</h1>
    }
            return(
                <form className='form' onSubmit={createOrder}>
                    <legend className='formulario'>Ingresa tus datos personales</legend>
                        <label className='pila'>
                            <span > Nombre y Apellido: </span>
                            <input type="text" value = {name} onChange={(evento) => setName(evento.target.value)} className='nombYap'placeholder="ingresa tu Nombre y Apellido"/>
                        </label>
                        <label className='email'>
                            <span> mail: </span>
                            <input type="text" value = {email} onChange={(evento) => setEmail(evento.target.value )} className='correo'placeholder="ingresa tu mail required " />
                        </label>
                        <label className='telefono'>
                            <span className='movil'> telefono: </span>
                            <input type="text" value = {phone} onChange={(evento) => setPhone(evento.target.value)} className='tel'placeholder="ingresa tu Telefono"/>
                        </label>
                        <button className='createOrden' onClick={(createOrder) => toast.success('La orden se genero con exito')}  type='submit'> Generar Orden </button>
                        <Toaster/>
                </form>
        )
    }

export default Checkout