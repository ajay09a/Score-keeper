import React from 'react'

const Commentory = ({handleSubmit, run, handleComment}) => {
  return (
    <>
        <form onSubmit={handleSubmit}>
          <input value={run} readOnly />
          <input onChange={handleComment} placeholder='Add a comment' />
          <button>Submit</button>
        </form>
    </>
  )
}

export default Commentory