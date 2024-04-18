import React, { useContext } from 'react'
import { NotesContext } from '../context/NotesContext'

function AllNotes() {
    const { notes } = useContext(NotesContext)
  return (
    <div className='AllNotes'>
        {notes.map((note) => {
            <a key={note.id} {...note.id} {...n}></a>
        })}
    </div>
  )
}

export default AllNotes