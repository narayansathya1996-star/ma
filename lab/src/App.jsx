import React, { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Products from './pages/Products'
import Blog from './pages/Blog'
import Contact from './pages/Contact'

export default function App(){
  const [route, setRoute] = useState('home')
  const nav = (r) => setRoute(r)
  return (
    <div className="app-root">
      <Header onNav={nav} route={route} />
      <main>
        { route === 'home' && <Home /> }
        { route === 'products' && <Products /> }
        { route === 'blog' && <Blog /> }
        { route === 'contact' && <Contact /> }
      </main>
      <Footer />
    </div>
  )
}
