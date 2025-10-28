import React from 'react'
export default function Blog(){
  const posts = [{t:'Why RF Shielding Matters'},{t:'Pneumatic Enclosure Advances'},{t:'EMC Testing Trends'}]
  return (
    <div className="container">
      <h2 className="section-title">Blog</h2>
      <div className="grid-3">
        {posts.map(p=> <article key={p.t} className="card"><h4>{p.t}</h4><p style={{color:'#ddd'}}>Short excerpt for {p.t}.</p></article>)}
      </div>
    </div>
  )
}