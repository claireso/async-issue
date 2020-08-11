import React from 'react'

export default ({ name, thumbnail }) => {
  return (
    <div className="pokemon">
      <img src={thumbnail} />
      <p>{name}</p>
    </div>
  )
}