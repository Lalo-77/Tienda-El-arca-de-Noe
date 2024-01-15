import React,{ useEffect, useState } from 'react' 
import { getItem } from '../../Mock/asyncMock'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom' 
import { getDoc,doc } from 'firebase/firestore'
import { db } from '../../services/firebase'

const ItemDetailContainer = () => { // tiene la misma logica que itemlist pero trae un producto, es para la vista
    const [producto, setProducto] = useState ({}) // null
    const [loader, setLoader] = useState (false)
    const { id } = useParams () // trae el dato que yo quiero
    
        useEffect (() =>{ // llamar a la funcion que llama a getItem, guarda un producto
            setLoader (true)
            const documentRef = doc( db, 'productos', id )
            getDoc(documentRef)
                .then(queryDocumentSnapshot =>{
                    const fields = queryDocumentSnapshot.data()
                    const productosAdap = {id: queryDocumentSnapshot.id, ...fields}
                    setProducto(productosAdap)
                })
                .catch(error => {
                    console.log(error)
                })
                .finally(() => {
                    setLoader(false)
                })
        /*getItem(id) // getProductById
        .then((producto)=> setProducto (producto))
        .catch((error)=> console.log(error))
        .finally(() => setLoader(false))
        }, [id])*/
    }, [id])
    if(loader) {
        return <h1>Loader</h1>
    }

    return (
        <>
            <h2 style={{fontSize:40, color:'blue', fontFamily: 'Times New Roman',}}>Estos son los productos que tenemos para tu mascota </h2>
            <div className='prod'> 
            { loader ? <p style={{color:'black', fontSize:30}}>Cargando... </p> :
                <ItemDetail producto={producto}/> 
            }
            </div>
        </>
    ) 
}
export default ItemDetailContainer

