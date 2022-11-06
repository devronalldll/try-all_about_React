import { createContext,  useEffect,useState } from "react";
import { tasks as data } from "../../server/tasks";

export const TaskContext = createContext();
export function TaskContextProvider(props) {
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    setTasks(data);
  }, []);
  function createTask(task) {
    setTasks([
      ...tasks,
      {
        id: tasks.length + 1,
        title: task.title,
        description: `${task.description} ${tasks.length + 1}`,
      },
    ]);
  }
  function deleteTask(taskid) {
    setTasks(tasks.filter((task) => task.id !== taskid));
  }
  return (
    <>
      <h1>Context</h1>
      <TaskContext.Provider
        value={{
          tasks,
          createTask: createTask,
          deleteTask,
        }}
      >
        {props.children}
      </TaskContext.Provider>
    </>
  );
}
export default TaskContext;
