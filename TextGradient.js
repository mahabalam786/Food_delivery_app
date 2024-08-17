import React from 'react'

const TextGradient = ({children}) => {
  return (
    <h1 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 via-red-500 to-yellow-500">
   {children}
  </h1>
  )
}

export default TextGradient