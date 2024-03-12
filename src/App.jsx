import { NavBar } from './components/NavBar'
import { ItemListContainer } from './components/ItemListContainer'
import './App.css'

function App() {
  return (
    <>
     <NavBar />
     <ItemListContainer greetings="hola" />
    </>
  )
}

export default App
