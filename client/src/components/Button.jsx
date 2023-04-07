import React from 'react'

const Button = ({onClick, children, type}) => {
  return (
    <button type={type} className='bg-blue-500 text-white font-bold py-2 px-4 rounded mt-5' onClick={onClick}>
        {children}
    </button>
  )
}

export default Button