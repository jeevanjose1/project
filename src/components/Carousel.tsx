import React from 'react'
import c1 from '../assets/c1.png'
import './componentStyles.scss'

const Cart = ():React.JSX.Element=>{
return (
  <div className='card-container'>
    <div className='image'>
      <img src={c1} alt="" />
    </div>
    <div className='content'>
      <h1>Lower Interest Rate</h1>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
    </div>
  </div>
)
}


const Carousel = ():React.JSX.Element => {



  return (
    <div className='carousel-component'>
      
        <button className='btn-left'>
        <svg width="30" height="30" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="10" cy="10" r="10" transform="rotate(180 10 10)" fill="#F5F5F5"/>
<path d="M5.64645 9.64645C5.45118 9.84171 5.45118 10.1583 5.64645 10.3536L8.82843 13.5355C9.02369 13.7308 9.34027 13.7308 9.53553 13.5355C9.7308 13.3403 9.7308 13.0237 9.53553 12.8284L6.70711 10L9.53553 7.17157C9.7308 6.97631 9.7308 6.65973 9.53553 6.46447C9.34027 6.2692 9.02369 6.2692 8.82843 6.46447L5.64645 9.64645ZM14 9.5L6 9.5L6 10.5L14 10.5L14 9.5Z" fill="#6A6A6A"/>
</svg>

        </button>
     
      <Cart/>
    </div>
  )
}

export default Carousel