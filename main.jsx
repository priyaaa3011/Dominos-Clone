import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import About from './Components/About/About.jsx'
import Layout from './Components/Layout.jsx'
import Home from './Components/Home/Home.jsx'
import Header from './Components/Header/Header.jsx'
import Footer from './Components/Footer/Footer.jsx'
import Contact from './Components/Contact/Contact.jsx'
import Menu from './Components/Menu/Menu.jsx'
import Order from './Components/Order/Order.jsx'
import Offer from './Components/Offer/Offer.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='' element={<Layout />} >
      <Route path='/' element={<Home />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/about' element={<About />} />
      <Route path='/header' element={<Header />} />
      <Route path='/footer' element={<Footer />} />
      <Route path='/Menu' element={<Menu />} />
      <Route path='/order' element={<Order />} />
      <Route path='/offer' element={<Offer />} />







    </Route>
  )
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

