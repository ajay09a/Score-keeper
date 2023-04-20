import React from 'react'

const Commentory = ({over}) => {
  return (
        <div className='commentory'>
          {over.map((res, index)=>{
            return(
              <div key={index+1}>
                {index%6===0?<hr />:null}
                <p>{res}</p>
              </div>
            )
          })}
        </div>
  )
}

export default Commentory