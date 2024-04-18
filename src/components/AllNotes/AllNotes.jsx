import React, { useContext } from 'react'
import { NoteContext } from '../../components/context/NoteContext';
import Note from '../Note/Note';

function AllNotes() {
  const { notes } = useContext(NoteContext);
  return (
    <div className='AllNotes'>
      {notes.map((note) => {
        <Note key={note.id} {...notes}></Note>
      })}
    </div>
  )
}

export default AllNotes
