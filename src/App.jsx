import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';


export default function App() {
  
  
  // function createTask (task)  {
  //   setTasks([...tasks,task]);
  // }

  return (
    <div>
      <TaskForm />
      <TaskList />
    </div>
  )
}

