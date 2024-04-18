import React from 'react'
import { mockNotes } from "../mockData/mockNotes"
import { generateAtualDate } from '../../Helper/generateAtualDate';
import { generateRondomId } from '../../Helper/generateRandomid';

const NotesContext = React.createContext();

const NoteProvider = ({ children }) => {
    const [notes, setNotes] = useState([...mockNotes]);

    const addNote = (title,description) => {
        setNotes([
            ...notes, 
            {id: generateRandomId(), description, title, date: generateAtualDate() },
        ]);
    };

    const deleteNote = (id) => {
        setNotes(notes.filter((note) => note.id !== id));
    };

    return (
        <NotesContext.Provider value={{notes, addNote, deleteNote}}>
            {children}
        </NotesContext.Provider>
    )
}

export {NoteProvider, NotesContext}