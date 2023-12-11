import NavBar from './Components/NavBar/NavBar.jsx'
import ItemListContainer from './Components/ItemListContainer/ItemListContainer.jsx'
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer.jsx'
import { BrowserRouter,Routes, Route} from 'react-router-dom'
import Principal from './Components/Principal/Principal.jsx'

function App() {
  return (
    <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element={ <ItemListContainer greeting={'Tienda el Arca de Noe'}/>} />
          <Route path='/category/:categoryId' element={<ItemListContainer greeting='Bienvenido a la categoria:'/>}/>
          <Route path='/item/:id' element={ <ItemDetailContainer/> }/>
        </Routes>
    </BrowserRouter>
  )
}
export default App