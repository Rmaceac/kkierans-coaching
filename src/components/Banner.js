import React from 'react'

export default function Banner({ headings }) {
  return (
    <div className="banner-container">
      <div className='banner-edge'>
        <hr />
      </div>
      <div className="headings-container">
        {headings.map((h) => {
          return <h2>{h}</h2>
        })}
      </div>
      <div className='banner-edge'>
        <hr />
      </div>
    </div>
  )
}
