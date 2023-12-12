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
          <Route exact path='/' element={ <ItemListContainer greeting={'Tienda el Arca de Noe'}/>} />
          <Route exact path='/category/:categoryId' element={<ItemListContainer greeting='Bienvenido a la categoria:'/>}/>
          <Route exact path='/item/:id' element={ <ItemDetailContainer/> }/>
        </Routes>
    </BrowserRouter>
  )
}
export default App