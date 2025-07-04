import { useState } from 'react'
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Home from './components/main/Home';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

function App() {
  const [count, setCount] = useState(0)

  return (
<>
   <Header/>
  <Home/>
  <Footer/>
</>
  )
}

export default App
