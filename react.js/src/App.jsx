import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from './components/button'
import { NavBar } from './components/NavBar'
import { ItemListContainer } from './components/ItemListContainer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <NavBar/>
     <h1>Hola a todos</h1>
     <Button/>
     <ItemListContainer/>
    </>
  )
}

export default App
