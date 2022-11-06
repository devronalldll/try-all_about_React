import { useState,useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskForm() {
  const [title, setTitle] = useState("");
  const [description , setDescription] = useState("");
  const {createTask}= useContext(TaskContext);
  const handleSubmint = (e) => {
    e.preventDefault();
    createTask({
      title,
      description,
    });
    setTitle("");
    setDescription("");
    // createTask(newTask); //TODO:study this
  };
  return (
    <form onSubmit={handleSubmint}>
      <input        
        placeholder="Escribe tu tarea"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        autoFocus
      />
      <textarea
        name="description"
        onChange={(e) => setDescription(e.target.value)}
        value={description}
      ></textarea>
      <button > Guardar </button>
    </form>
  );
}
export default TaskForm;
