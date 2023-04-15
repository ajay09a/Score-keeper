import React from 'react'

const Button = ({handlebutton}) => {
    const data = [0, 1, 2, 3, 4, 5, 6, 'w']
  return (
    <>
        {data.map((num, index)=>{
            return <button key={index} onClick={handlebutton}>{num}</button>
        })}
    </>
  )
}

export default Button