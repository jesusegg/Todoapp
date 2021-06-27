import React, { useState } from "react";
import TodoList from "./TodoList";

function InputTodo() {
  const [input, setInput] = useState([]);

  function onClose(inputActual) {
    setInput((input) => input.filter((c) => c !== inputActual));
  }
  function editSave(inputActual, inputSave) {
    setInput([inputSave, ...input]);
    onClose(inputActual);
  }

  // buscador

  // traer nuevas list

  return (
    <div className="contenedorTodo">
      <div className="contenedorInput">
        <h1 className="titulo">To-Do List</h1>
        <input className={"inputPrincipal"} type="text"></input>
        <button
          className="botonPrincipal"
          onClick={() =>
            setInput([
              ...input,
              document.querySelector(".inputPrincipal").value,
            ])
          }
        >
          Add
        </button>
      </div>
      <div>
        {input &&
          input.map((x, index) => (
            <TodoList
              onClose={onClose}
              editSave={editSave}
              key={index}
              input={x}
            />
          ))}
      </div>
    </div>
  );
}

export default InputTodo;
