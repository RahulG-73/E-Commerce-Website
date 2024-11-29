import React from 'react'
import './newsLetter.css'

function Newsletter() {
  return (
    <div  className ='newsletter'>
        <h1>get Exclusive offers On Our Email</h1>
        <p>Subscribe to our newsletter and stay updated</p>
        <div>
            <input type="email" placeholder='your Email Id' />
            <button>Subscribe</button>
        </div>

    </div>
  )
}

export default Newsletter