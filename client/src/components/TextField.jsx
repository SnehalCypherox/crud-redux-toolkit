import React from 'react'

const TextField = ({label, inputProps, onChange, value, name}) => {
  return (
    <div className='flex flex-col py-5'>
        <label className='mb-2 text-base font-semibold text-gray-700' htmlFor={label}>{label}</label>
        <input
        className='bg-gray-200 py-2 px-3 border-2 outline-none'
        {...inputProps}
        onChange={onChange}
        value={value}
        name={name}
        />
    </div>
  )
}

export default TextField