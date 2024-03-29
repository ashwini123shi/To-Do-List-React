import React from "react";
import ToDo from "./ToDo";

const ToDoList = ({ toDoList, handleToggle, handleFilter, handleDelete }) => {
  return (
    <>
      <ol className="list-group my-5 border border-light">
        {toDoList.map((todo) => (
          <li
            key={todo.id}
            className="list-group-item text-capitalize d-flex justify-content-between my-2"
          >
            <ToDo
              todo={todo}
              handleToggle={handleToggle}
              handleFilter={handleFilter}
              handleDelete={handleDelete}
            />
          </li>
        ))}
      </ol>
      <button
        className="btn btn-danger btn-block text-capitalize mt-5  mb-5"
        onClick={handleFilter}
      >
        Clear All
      </button>
    </>
  );
};

export default ToDoList;
