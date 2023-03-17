import React from 'react'

const Error = ({children}) => {
  return (
    <div className="bg-red-800 text-center text-white p-3 rounded-md font-bold mb-3 uppercase ">
        <p>{children}</p>
    </div>
  )
}

export default Error