import React from 'react'

const Commentory = ({over}) => {
  return (
        <div className='commentory'>
          {over.map((res, index)=>{
            return <p key={index+1}>{res}</p>
          })}
        </div>
  )
}

export default Commentory