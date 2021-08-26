import React from "react";

const ToDo = ({ todo, handleToggle, handleFilter, handleDelete }) => {
  return (
    <div className={todo.complete ? "todo strike" : "todo"}>
      {todo.task}
      <span className="mx-2 text-success cursor-ptr">
        <i
          id={todo.id}
          name="todoStatus"
          value={todo.id}
          onClick={(e) => handleToggle(e.currentTarget.id)}
          className="fa fa-check"
          aria-hidden="true"
        ></i>
      </span>
      <span className="mx-2 text-danger cursor-ptr">
        <i
          id={todo.id}
          name="todoDelete"
          value={todo.id}
          onClick={(e) => handleDelete(e.currentTarget.id)}
          className="fa fa-trash"
          aria-hidden="true"
        ></i>
      </span>
    </div>
  );
};

export default ToDo;
