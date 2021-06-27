import React, { useState } from "react";

function TodoList({ input, onClose, editSave }) {
  const [mostrar, setMostrar] = useState(true);
  const [edit, setEdit] = useState(true);
  const [save, Setsave] = useState(true);

  function checkbox() {
    if (mostrar === true) {
      setMostrar(false);
    } else {
      setMostrar(true);
    }
  }

  return (
    <div className="contenedorLista">
      <div className="contenedorCheckbox">
        {/* boton verificacion */}
        <input onClick={checkbox} type="checkbox"></input>

        {/* prop */}

        {edit && <p className={!mostrar && "checkbox"}>{input}</p>}
        {!edit && <input className="inputModificado" type="text"></input>}
      </div>
      <div>
        {/* boton edit */}
        {save && (
          <button
            className="edit"
            onClick={() => {
              setEdit(false);
              Setsave(false);
              // document.querySelector(".delete").classList.add("ver");
            }}
          >
            Edit
          </button>
        )}
        {/* boton delete */}
        <button className="delete" onClick={() => onClose(input)}>
          Delete
        </button>

        {!save && (
          <button
            // disabled={!document.querySelector(".inputModificado").value}
            className="save"
            onClick={() => {
              editSave(input, document.querySelector(".inputModificado").value);
              setEdit(true);
              Setsave(true);
              // document.querySelector(".ver").classList.remove("ver");
            }}
          >
            Save
          </button>
        )}
      </div>
    </div>
  );
}

export default TodoList;
