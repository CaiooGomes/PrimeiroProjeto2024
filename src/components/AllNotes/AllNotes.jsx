import React, { useContext } from 'react'
import { NoteContext } from '../../components/context/NoteContext';
import Note from '../Note/Note';

function AllNotes() {
  const { notes } = useContext(NoteContext);
  return (
    <div className='AllNotes'>
      {notes.map((n) => (
        <Note key={n.id} {...n}/>
      ))}
    </div>
  )
}

export default AllNotes
