import React from 'react'

const Button = ({handlebutton}) => {
    const data = [0, 1, 2, 3, 4, 5, 6, 'wicket']
  return (
    <div className='button-container'>
        {data.map((num, index)=>{
            return <button className='run-button' key={index} onClick={handlebutton}>{num}</button>
        })}
        <br />
        <br />
    </div>
  )
}

export default Button