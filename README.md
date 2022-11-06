 Despliegue GitHub Pages
  https://www.youtube.com/watch?v=rLoWMU4L_qE&list=PLB6KsGgo5nlb_GFAF1RRCFuJIPzeUuPNi&index=1&t=16944s

 
 const newTask = {
      title,
      description,
    };
    createTask(newTask); //
=========================================
function TaskForm({ createTask }) {
  ...
  reateTask({
      title,
      description,
  });
------------------------------------------
<button onClick={()=>mostrarAlerta()}>Eliminar</button>
<button onClick={mostrarAlerta}>Eliminar</button>
------------------------------------------
import TaskContext from "../context/TaskContext";
export function TaskCard({ task, deleteTask }) {
  return (
    <TaskContext>
      <div>
        <h3>{task.title}</h3>
        <p>{task.description}</p>
        <button onClick={() => deleteTask(task.id)}>Eliminar</button>
      </div>
    </TaskContext>
  );
}
///////////////////////////////////////////
function TaskContext(props) {
  return (
    <>
      <h1>Context</h1>
      {props.children}
    </>
  );
}
export default TaskContext;
=========================================
function TaskContext(props) {
  return (
    <>
      <h1>Context</h1>
      {/* <div>
        <h3>{task.title}</h3>
        <p>{task.description}</p>
        <button onClick={() => deleteTask(task.id)}>Eliminar</button>
      </div> */}
      {props.children}
    </>
  );
}
export default TaskContext;
--------------------------------------------------
import { createContext } from "react";
export const TaskContext = createContext();
export function TaskContextProvider(props) {
  let x = 20;
  return (
    <>
      <h1>Context</h1>
      <TaskContext.Provider value={x}>{props.children}</TaskContext.Provider>
    </>
  );
}
export default TaskContext;
////////////////////////////////////////////////////
import {useContext} from 'react';
import {TaskContext} from "../context/TaskContext"

export function TaskCard({ task, deleteTask }) {
  const valor =useContext(TaskContext)
  console.log(valor)
  return (
    <div>
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <button onClick={() => deleteTask(task.id)}>Eliminar</button>
    </div>
  );
}
