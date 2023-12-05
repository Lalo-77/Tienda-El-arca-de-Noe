import NavBar from './Components/NavBar/NavBar.jsx'
import ItemListContainer from './Components/ItemListContainer/ItemListContainer.jsx'
import ItemCount from './Components/ItemCount/ItemCount.jsx'

function App() {
  return (
    <>
        <NavBar/>
        <ItemListContainer greeting={'Tienda el Arca de Noe'}/>
        <ItemCount initial={1} stock={50}/>
    </>
  )
}
export default App
