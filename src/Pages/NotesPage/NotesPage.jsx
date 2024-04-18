import React from 'react'
import './NotesPage.css'
import { NoteProvider } from '../../components/context/NoteContext'
import AllNotes from '../../components/AllNotes/AllNotes'
import FormNote from '../../components/FormNote/FormNote'

function NotesPage() {
  return (
    <NoteProvider>      
      <div className='notePageContainer'>
          <FormNote/>
          <AllNotes />
      </div>
    </NoteProvider>
  )
}

export default NotesPage