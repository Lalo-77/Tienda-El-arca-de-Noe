import React, { useState } from "react"
import { useCart } from "../../Context/CartContext"
import { db } from "../../services/firebase/"
import { addDoc, getDocs, collection, query, where, documentId, writeBatch, serverTimestamp } from 'firebase/firestore'
import './Checkout.css'
import {useForm} from 'react-hook-form'
import { Toaster, toast } from 'sonner'

const Checkout = () => {
    const [loading, setLoading] = useState(false);
    const [orderId, setOrderId] = useState(null);
    const { cart, total, clearCart } = useCart();
    const { register, handleSubmit } = useForm ();
  
    const createOrder = async (userData) => {

      try {
        setLoading(true);
        const objOrder = {
          buyer: {
            name: userData.name,
            phone: userData.phone,
            email: userData.email,
            data: serverTimestamp (),
          },
          items: cart,
          total,
        };
  
        const batch = writeBatch(db);
        const outOfStock = [];
  
        const ids = cart.map((prod) => prod.id);
  
        const productsCollection = query(collection(db, "products"), where(documentId(), "in", ids));
  
        const { docs } = await getDocs(productsCollection);
  
          docs.forEach((doc) => {
          const dataDoc = doc.data();
          const stockDb = dataDoc.stock;
  
          const productAddedToCart = cart.find((prod) => prod.id === doc.id);
          const prodQuantity = productAddedToCart?.quantity;
  
          if (stockDb >= prodQuantity) {
            batch.update(doc.ref, { stock: stockDb - prodQuantity });
          } else {

            outOfStock.push({ id: doc.id, ...dataDoc });
          }
      });
  
        if (outOfStock.length === 0) {
          batch.commit();
  
          const ordersCollection = collection(db, "orders");
  
          const { id } = await addDoc(ordersCollection, objOrder);
  
          clearCart();
          setOrderId(id);

        }else{

          toast.error('Hay productos que no tienen stock disponible!')
        }
        } catch{

          toast.error('Hubo un error generando la orden:')

      } finally {

        setLoading(false);
      }
    };
  
    if (loading) {
      return <h1 className='exito'> Se esta generando su orden... </h1>;
    }
  
    if (orderId) {
            return <h2 className='nroComp'> El id de su orden es: {orderId} </h2>;
          }
        return (
      <>
        <h1 className='CH1'>Checkout</h1>
        <h2> Completa el formulario con tus datos personales </h2>
        <div>
          <form className='form' onSubmit={handleSubmit(createOrder)}>
              <legend className='formulario'>Ingresa tus datos personales</legend>
                  <label className='pila'>
                    <span className="nombreYap"> Nombre y Apellido: </span>
                    <input type='text'  className='nombYapellido'placeholder=" Ingresa tu Nombre y Apellido " {...register("name")} />
                  </label>
                  <label className='email'>
                    <span className='correo'> e-mail: </span>
                    <input type="text" className='corr'placeholder=" Ingresa tu e-mail " {...register("email")}/>
                  </label>
                  <label className='telefono'>
                    <span className='tel'> telefono: </span>
                    <input type='text' className='tele'placeholder=" Ingresa tu Telefono"  {...register("phone")}/>
                  </label>

                  <button className='createOrder' type="submit" > Generar Orden </button>
                  <Toaster/>
          </form>
        </div>
        <Toaster/>
      </>
    );
    };
    export default Checkout;
