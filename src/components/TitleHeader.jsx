import React from 'react'

const TitleHeader = ({ title, sub }) => {
  return (
    <div className='flex flex-col items-center gap-5'>
      <div className="hero-badge">
        <p>{sub}</p>
      </div>
      <div className="font-semibold md:text-5xl text-3xl text-center">
        <p>{title}</p>
      </div>
    </div>
  )
}

export default TitleHeader