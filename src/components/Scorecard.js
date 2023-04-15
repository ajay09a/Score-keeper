import React from 'react'

const Scorecard = ({score, wicket, totalOver}) => {
  return (
    <>
        <h3>Score:{score}/{wicket}</h3>
        <h3>Over:{totalOver}</h3>
    </>
  )
}

export default Scorecard