import React from 'react'
import { generateAtualDate } from '../../Helper/generateAtualDate'

const mockNotes = [
    {
        id: 1,
        title: 'nota 1 teste',
        description: 'teste 1',
        data: generateAtualDate()
    },
    {
        id: 2,
        title: 'nota 2 teste',
        description: 'teste 2',
        data: generateAtualDate()
    },
    {
        id: 3,
        title: 'nota 3 teste',
        description: 'teste 3',
        data: generateAtualDate()
    }

]

export default mockNotes