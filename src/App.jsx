import React,{useContext} from 'react'
import Header from './Components/Header/Header'
import ItemListContainer from './Components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter,Routes, Route} from 'react-router-dom'
import Cart from './Components/Cart/Cart'
import Footer from './Components/Footer/Footer'
import {CartContext} from './Context/CartContext'
import Checkout from './Components/Checkout/Checkout'

function App() {
    
    return (
        <div className='App'>
            <CartContext.Provider >
                <BrowserRouter>
                    <Header/>
                    <Routes>
                        <Route exact path='/' element={ <ItemListContainer greeting={'Tienda el Arca de Noe'}/>} />
                        <Route exact path='/category/:categoryId' element={<ItemListContainer greeting='Bienvenido a la categoria:'/>}/>
                        <Route exact path='/item/:id' element={ <ItemDetailContainer/> }/>
                        <Route exact path='/cart' element={ <Cart/>}/>
                        <Route exact path='/Checkout' element={ <Checkout/>}/>
                    </Routes>
                    <Footer/> 
                </BrowserRouter>
            </CartContext.Provider>
        </div>
    )
}
export default App