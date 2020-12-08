import React from 'react'
import './Pets.css'


const Pets =({img, title,specie}) =>{
    return (
      <div className= 'pets'>
        <img src={img} alt=""   width='300px'></img>
        <h3>{title}</h3>
        <p>{specie}</p>
      </div>
    );
}



export default Pets

