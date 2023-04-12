import { TaskContext } from "../context/TaskContext";
import { useContext } from "react";

export function TaskCard(props) {
  // console.log(task);

  // const valor = useContext(TaskContext);
  // console.log(valor);

  const { deleteTask } = useContext(TaskContext);

  // console.log(props.task.title);

  return (
    <div className="bg-gray-800 text-white p-4 rounded-md">
      <h1 className="text-xl font-bold capitalize">{props.task.title}</h1>
      <p className="text-gray-500 text-sm">{props.task.descripcion}</p>
      <button
        className="bg-red-500 px-2 py-1 rounded-md mt-4 hover:bg-red-400 "
        onClick={() => {
          deleteTask(props.task.id); //llama funcion deteleTask y le manda el id que se ha selecionado para que verifique y elemine
          // console.log(props.task.id);
        }}
      >
        Eliminar Tarea
      </button>
      {/* console.log(props.task.descripcion) */}
    </div>
  );
}

// export default TaskCard;
