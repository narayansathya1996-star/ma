import React from 'react'
export default function Contact(){
  return (
    <div className="container">
      <h2 className="section-title">Request a Quote</h2>
      <div className="card" style={{maxWidth:720}}>
        <form onSubmit={(e)=>{ e.preventDefault(); alert('Demo: quote received.'); e.target.reset(); }}>
          <div style={{display:'flex',gap:8}}>
            <input name="name" placeholder="Full name" style={{flex:1,padding:10,borderRadius:8,background:'transparent',border:'1px solid rgba(255,255,255,0.06)'}} required/>
            <input name="company" placeholder="Company" style={{flex:1,padding:10,borderRadius:8,background:'transparent',border:'1px solid rgba(255,255,255,0.06)'}}/>
          </div>
          <div style={{display:'flex',gap:8,marginTop:8}}>
            <input name="email" placeholder="Email" type="email" style={{flex:1,padding:10,borderRadius:8,background:'transparent',border:'1px solid rgba(255,255,255,0.06)'}} required/>
            <input name="phone" placeholder="Contact number" style={{flex:1,padding:10,borderRadius:8,background:'transparent',border:'1px solid rgba(255,255,255,0.06)'}}/>
          </div>
          <textarea name="message" placeholder="Brief message" style={{width:'100%',marginTop:8,padding:10,borderRadius:8,background:'transparent',border:'1px solid rgba(255,255,255,0.06)'}} />
          <div style={{display:'flex',justifyContent:'flex-end',marginTop:12}}><button className="btn primary" type="submit">Request a Quote</button></div>
        </form>
      </div>
    </div>
  )
}