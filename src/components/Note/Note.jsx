import React from 'react'

function Note({title, description, data, id}) {
  return (
    <div>
        <h1>{title}</h1>
        <h1>{description}</h1>
        <h1>{data}</h1>
    </div>
  )
}

export default Note