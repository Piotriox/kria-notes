import { useState } from 'react'
import './index.css'
import Header from './Header.jsx'
import Preferences from './Preferences.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Header></Header>
  )
}

export default App
