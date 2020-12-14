import React from 'react'
import './Nav.css'


const Nav=() =>{
    return (
      <div className="nav">
        <p>PET WORLD</p>
        <ul className="list">
          <li onclick="window.location.href='/page2'">HOME</li>
          <li onclick="window.location.href='/page2'">ABOUT</li>
          <li action="https://google.com">CONTACT</li>
        </ul>
      </div>
    );
}


export default Nav

