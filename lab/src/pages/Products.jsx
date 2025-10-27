import React from 'react'
export default function Products(){
  const products = ['Portable','Rack-Mount','Benchtop','Pneumatic','RF Chambers','Standalone']
  return (
    <div className="container">
      <h2 className="section-title">Products</h2>
      <div className="grid-3">
        {products.map(p=> <div key={p} className="card"><h3>{p}</h3><p style={{color:'#ddd'}}>Description for {p}.</p></div>)}
      </div>
    </div>
  )
}