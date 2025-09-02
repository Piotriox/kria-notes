import { useState } from 'react'
import './index.css'
import Header from './Header.jsx'
import Content from './Content.jsx'
import Footer from './Footer.jsx'
import Preferences from './Webmenu.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header></Header>
    <Content></Content>
    <Footer></Footer>
    </>
  )
}

export default App
