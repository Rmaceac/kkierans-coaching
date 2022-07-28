import React from 'react'

export default function Banner({ headings }) {
  return (
    <div className="banner-container">
      <div className='banner-edge'>
        <hr />
      </div>
      <div className="headings-container">
        <h2>HEADING 1</h2>
        <h2>HEADING 2</h2>
        <h2>HEADING 3</h2>
        {/* {headings.map((h) => {
          <h2>{h}</h2>
        })} */}
      </div>
      <div className='banner-edge'>
        <hr />
      </div>
    </div>
  )
}
