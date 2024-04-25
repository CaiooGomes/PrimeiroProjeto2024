import React from 'react'
import { NoteProvider } from '../../components/context/NoteContext'
import FormNote from "../../components/FormNote/FormNote"// novo
import AllNotes from "../../components/AllNotes/AllNotes"
import './NotesPage.css'

function NotesPage() {
  return (
    <NoteProvider>
      <div className='notePageContainer'>
        <FormNote></FormNote>
        <AllNotes></AllNotes>
      </div>
    </NoteProvider>
  )
}

export default NotesPage