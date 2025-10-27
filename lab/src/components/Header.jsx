import React from 'react'
export default function Header({onNav, route}){
  return (
    <header className="site">
      <div className="brand">
        <div className="logo"><span className="labi">LABI</span><span className="fix">FIX</span></div>
        <div className="tag">DESIGN · DEVELOP · MEASURE</div>
      </div>
      <nav className="nav" role="navigation" aria-label="main navigation">
        <button className={route==='home'?'active':''} onClick={()=>onNav('home')}>Home</button>
        <button className={route==='products'?'active':''} onClick={()=>onNav('products')}>Products</button>
        <button className={route==='blog'?'active':''} onClick={()=>onNav('blog')}>Blog</button>
        <button className={route==='contact'?'active':''} onClick={()=>onNav('contact')}>Contact</button>
      </nav>
    </header>
  )
}