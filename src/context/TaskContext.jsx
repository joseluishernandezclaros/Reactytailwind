import { createContext, useState, useEffect } from "react";
import { tasks as tareas } from "../data/tasks";

export const TaskContext = createContext();

export function TaskContextProvider(props) {
  const [tasks, setTasks] = useState([]);

  function createTask(title, descripcion) {
    // console.log(title, descripcion);
    setTasks([
      ...tasks,
      {
        title: title,
        id: tasks.length,
        descripcion: descripcion,
      },
    ]);
    // setTasks([...tasks, task]); //agarrar el objeto tasks y copiarlo en una nueva variable llamada task con la finalidad de usar los elementos ya existentes y agregarle unos nuevos sin modificar la variable original
  }

  function deleteTask(taskId) {
    setTasks(tasks.filter((task) => task.id !== taskId)); //llega el id pulsado en el boton eleminar por taskID  y se verifica los valores que son diferentes al id con la finalidad de NO eliminarlos, los que den false es decir que su id es igual al id que llego por taskID ese elemento del objeto se elimina.
    // setTasks(tasks.filter((task) => {
    //   return (task.id !== taskId)
    // }));
    // console.log(tasks[0].id);
    // console.log();
    // console.log(taskId);
  }

  useEffect(() => {
    setTasks(tareas);
  }, []);

  return (
    <TaskContext.Provider
      value={{ tasks: tasks, deleteTask: deleteTask, createTask: createTask }}
    >
      {props.children}
    </TaskContext.Provider>
  );
}

export default TaskContext;
