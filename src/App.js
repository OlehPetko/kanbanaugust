import React, {useState} from 'react'
import CreateFormTask from "./CreateFormTask"
import Board from "./Board"
import {v4 as uuidv4} from 'uuid'

const initialTask = [
    {
        id: uuidv4(),
        title: 'First Task',
        priority: 2,
        status: 'todo'
    },
    {
        id: uuidv4(),
        title: 'Second Task',
        priority: 3,
        status: 'review'
    }
]
const statuses = ['todo', 'progress', 'review', 'done']
const App = (props) => {

    const [tasks, setTask] = useState(initialTask)
    return (
        <div>
            <CreateFormTask/>
            {statuses.map(el => <Board status={el}
                                       key={el}
                                       tasks={tasks}/>)}
        </div>
    );
}

export default App
