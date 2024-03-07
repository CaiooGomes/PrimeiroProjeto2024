import React from 'react'
import './Titulo.css'

function Titulo(propss) {
  return (
    <div>
        <h1 className={propss.classe}>
            {propss.children}
        </h1>
    </div>
  )
}

export default Titulo