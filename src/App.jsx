import NavBar from './Components/NavBar/NavBar.jsx'
import ItemListContainer from './Components/ItemListContainer/ItemListContainer.jsx'

function App() {
  return (
    <>
        <NavBar/>
        <ItemListContainer Greetings ={'Bienvenido a la Tienda!'} />
    </>
  )
}

export default App
