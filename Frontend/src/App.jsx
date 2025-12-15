import React, { useEffect, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Layout from './components/JSX/Layout'
import LoadingOverlay from './components/JSX/LoadingOverlay';

const Home = React.lazy(() => import('./Pages/Home'));
const Shop = React.lazy(() => import('./Pages/Shop'));
const About = React.lazy(() => import('./Pages/About'));
const View = React.lazy(() => import('./Pages/View'));
const Contact = React.lazy(() => import('./Pages/Contact'));
const Checkout = React.lazy(() => import('./Pages/Checkout'));
const Confirmation = React.lazy(() => import('./Pages/Confirmation'));

function App() {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <Suspense fallback={<LoadingOverlay />}>
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
    </Suspense>
  )
}

export default App
