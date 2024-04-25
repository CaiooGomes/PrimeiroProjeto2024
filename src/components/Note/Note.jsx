import React from 'react'

function Note({title, description, date, id}) {
  return (
    <div>
        <h1>{title}</h1>
        <span>{description}</span>
        <div>{date}</div>
    </div>
  )
}

export default Note