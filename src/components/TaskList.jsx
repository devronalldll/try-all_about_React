import {useContext} from 'react';
import {TaskContext} from "../context/TaskContext"
import {TaskCard} from './TaskCard';
export default function TaskList() {   
    const {tasks}=useContext(TaskContext)
    if (tasks.length === 0) {
        return <p>No tasks</p>
    }
  return (
    <>
    <h2>TaskList</h2>
    <div>
        {tasks.map((task,i) => (
            <TaskCard key={i} task={task} />
        ))}
    </div>
    </>
  )
}