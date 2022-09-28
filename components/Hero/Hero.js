import React from 'react'
import style from "./hero.module.scss"

const Hero = () => {
  return (
    <div className={style.hero}>
        <p>Pritech Studio is a 
digital design agency that helps businesses craft products and services that improve 
the lives of their clients.
We build interactive websites and landing pages, and 3D graphics.</p>

     <button>Get a Quote</button>
    </div>
    
  )
}

export default Hero;