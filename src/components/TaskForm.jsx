import React, { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskForm() {
  const [title, settitle] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const { createTask } = useContext(TaskContext);

  // const valor = useContext(TaskContext);
  // console.log(valor);

  const manejarSubmit = (e) => {
    e.preventDefault(); //funcion para que lo que se muestra en consola se mantenga ahi y no desaparesca durante la carga del submit

    createTask(title, descripcion);
    // props.createTask(newTask);
    // return props.crearTask(newTask);
    // console.log(newTask);
    // props.createTask(newTask);
    //al llamar a newTask entre parentesis se envia a el archivo App.jsx con el titul que se halla escrito en el input y luego la funcion createTask obtiene el objeto de tasks.js y le agrega un nuevo elemento con lo que se escribio en el input

    settitle(""); //setear los hooks como vacios luego de enviarlos
    setDescripcion(""); //setear los hooks como vacios luego de enviarlos
  };

  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={manejarSubmit} className="bg-slate-800 p-10 mb-4">
        <h1 className="text-2xl font-bold text-white mb-3">Crea tu tarea</h1>
        <input
          placeholder="Escribe tu tarea"
          onChange={(e) => {
            settitle(e.target.value); //definir el valor de lo que se escribe en el input a la variable title del useState
          }}
          value={title} //limpiar el formulario
          autoFocus
          className="bg-slate-300 p-3 w-full mb-2"
        ></input>
        <textarea
          placeholder="Escribe la descripción de la tarea"
          onChange={(e) => {
            setDescripcion(e.target.value);
          }}
          value={descripcion} //limpiar el formulario
          className="bg-slate-300 p-3 w-full mb-2"
        ></textarea>
        <button className="bg-indigo-500 px-3 py-1 text-white">Guardar</button>
        {/* <hr></hr> */}
      </form>
    </div>
  );
}

export default TaskForm;
