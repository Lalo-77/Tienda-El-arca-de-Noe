import React from 'react'
import Header from './Components/Header/Header'
import ItemListContainer from './Components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter,Routes, Route} from  'react-router-dom'
import CartView from './Components/CartView/CartView'
import Footer from './Components/Footer/Footer'
import Checkout from './Components/Checkout/Checkout'
import {CartProvider} from './Context/CartContext'
import NotFound from './Components/NotFound/Error'
import { Toaster,toast } from 'sonner'

function App() {

    return (
        <div className='App'>
            <BrowserRouter>
                    <CartProvider>
                        <Header/>
                        <Routes>
                            <Route exact path='/' element={ <ItemListContainer greeting={'Tienda el Arca de Noe'}/>} />
                            <Route exact path='/category/:categoryId' element={<ItemListContainer greeting='Bienvenido a la categoria:'/>}/>
                            <Route exact path='/item/:id' element={ <ItemDetailContainer/> }/>
                            <Route exact path='/cart' element={ <CartView/>}/>
                            <Route exact path='/checkout' element={ <Checkout/>}/>
                            <Route exact path='/not Found' element={<NotFound/>}/>
                        </Routes>
                        <Footer/> 
                    </CartProvider>
                    <Toaster position="top-right" expand={true} richColors />
            </BrowserRouter>
        </div>
    )
}
export default App