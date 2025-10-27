import React from 'react'
import ThreeHero from '../three/ThreeHero'
export default function Home(){
  return (
    <div className="container">
      <section className="hero" aria-label="Hero">
        <div className="hero-left">
          <h1>Next‑Gen RF Shielding & Chamber Solutions</h1>
          <p>Precision-engineered RF shield boxes and chambers for defence, medical and advanced labs — modular, tested & integratable.</p>
          <div className="controls">
            <button className="btn primary" onClick={()=>window.alert('Navigate to Products')}>Explore Products</button>
            <button className="btn ghost" onClick={()=>window.alert('Open Quote Form or Contact')}>Request a Quote</button>
          </div>
        </div>
        <div className="hero-right"><ThreeHero /></div>
      </section>

      <section style={{marginTop:24}}>
        <h2 className="section-title">Featured Products</h2>
        <div className="grid-3">
          <div className="card"><h3>Portable RF Box</h3><p style={{color:'#ddd'}}>Compact, mobile shielding.</p></div>
          <div className="card"><h3>Rack-Mount</h3><p style={{color:'#ddd'}}>Integrate into racks.</p></div>
          <div className="card"><h3>Benchtop</h3><p style={{color:'#ddd'}}>Bench R&D friendly.</p></div>
          <div className="card"><h3>Pneumatic</h3><p style={{color:'#ddd'}}>Automated systems.</p></div>
          <div className="card"><h3>RF Chambers</h3><p style={{color:'#ddd'}}>High-isolation chambers.</p></div>
          <div className="card"><h3>Standalone</h3><p style={{color:'#ddd'}}>Large OTA test setups.</p></div>
        </div>
      </section>

      <section style={{marginTop:24}}>
        <h2 className="section-title">Latest from the Blog</h2>
        <div className="grid-3">
          <div className="card"><h4>Why RF Shielding Matters</h4><p style={{color:'#ddd'}}>Standards & use-cases.</p></div>
          <div className="card"><h4>Pneumatic Advances</h4><p style={{color:'#ddd'}}>Automation improves repeatability.</p></div>
          <div className="card"><h4>EMC Trends</h4><p style={{color:'#ddd'}}>OTA & measurement updates.</p></div>
        </div>
      </section>
    </div>
  )
}