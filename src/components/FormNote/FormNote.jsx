import React, { useContext, useState } from 'react'
import { NotesContext } from '../context/NotesContext'

function FormNote() {
    const [ noteCreated, setNoteCreated] = useState({title:"", description: ""})
    const { addNote } = useContext(NotesContext)
    
    const sendNote = (e) => {
        e.preventDefault();
        addNote(noteCreated.title, noteCreated.description)
        }
    } 

    return (
        <div className='aside-notes'>
            <form id='formNote' onSubmit={sendNote}>
                <label htmlFor="titleNote" className='margin-form'>{" "} Título</label>
                <input type="text"
                    className='margin-form'
                    value={noteCreated.title}
                    onChange={(e) => setNoteCreated({...noteCreated, title: e.target.value})}
                    id='titleNote'
                    placeholder='Título'    
                />
                <label htmlFor="descriptionNote" className='margin-form'>{" "} Descrição </label>
                <input type="text"
                    className='margin-form'
                    value={noteCreated.description}
                    onChange={(e) => setNoteCreated({...noteCreated, description: e.target.value})}
                    id='descriptionNote'
                    placeholder='Descrição'    
                />
                <button type='submit' id='buttonForm' className='margin-form'> Salvar Anotação </button>
            </form>
        </div>


    )


export default FormNote