import React, { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Home from './Pages/Home'
import Shop from './Pages/Shop'
import About from './Pages/About'
import View from './Pages/View'
import Contact from './Pages/Contact'
import Checkout from './Pages/Checkout'
import Confirmation from './Pages/Confirmation'
import Layout from './components/JSX/Layout'

function App() {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/confirmation" element={<Confirmation />} />
        <Route path="/view/:id" element={<View />} />
      </Route>
    </Routes>
  )
}

export default App
