import React from 'react'

const Form = ({handleSubmit, run, handleComment}) => {
  return (
    <>
        <form onSubmit={handleSubmit}>
          <input value={run} readOnly />
          <input onChange={handleComment} placeholder='Add a comment' />
          <button className='submit'>Submit</button>
        </form>
    </>
  )
}

export default Form