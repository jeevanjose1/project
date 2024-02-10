import React from 'react'


const Input = (props:any):React.JSX.Element => {
  return (
    <input className='custom-input' type="text" {...props}/>
  )
}

export default Input