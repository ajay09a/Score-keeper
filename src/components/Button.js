import React from 'react'

const Button = ({handlebutton}) => {
    const data = [0, 1, 2, 3, 4, 5, 6, 'wicket']
  return (
    <>
        {data.map((num, index)=>{
            return <button key={index} onClick={handlebutton}>{num}</button>
        })}
        <br />
        <br />
    </>
  )
}

export default Button