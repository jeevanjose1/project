import React from 'react'
import './componentStyles.scss'
const Button = (props:{text: String}):React.JSX.Element => {
  return (
    <button className='custom-button'>
        {props.text}
    </button>
  )
}

export default Button