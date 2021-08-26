import React, { useState } from "react";
//components
import Header from "./Header";
import ToDoList from "./ToDoList";
import ToDoForm from "./ToDoForm";
import ToDoReconfirm from "./ToDoReconfirm";

//css
import "bootstrap/dist/css/bootstrap.min.css";

const TodoApp = () => {
  //State variable for list
  const [duplicateItem, setDuplicateItem] = useState("");
  const [toDoList, setToDoList] = useState([]);

  const handleToggle = (id) => {
    let mapped = toDoList.map((task) => {
      return task.id === Number(id)
        ? { ...task, complete: !task.complete }
        : { ...task };
    });
    setToDoList(mapped);
  };

  const handleFilter = () => {
    setToDoList([]);
  };

  const handleDelete = (id) => {
    const updatedItems = toDoList.filter((task) => {
      return task.id !== Number(id);
    });
    setToDoList(updatedItems);
  };
  const addTaskToList = (taskItem) => {
    //set todo list
    setToDoList([
      ...toDoList,
      { id: toDoList.length + 1, task: taskItem, complete: false }
    ]);
  };

  const addTask = (taskItem) => {
    const duplicate = toDoList.find((item) => item.task === taskItem);

    if (!!duplicate) {
      console.log(duplicate);
      setDuplicateItem(duplicate.task);
    } else {
      addTaskToList(taskItem);
    }
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-10 mx-auto col-md-8 mt-4">
          <Header />
          <ToDoForm addTask={addTask} isDuplicateItem={!!duplicateItem} />
          {!!duplicateItem && (
            <ToDoReconfirm
              addTaskToList={addTaskToList}
              handleDiscard={() => setDuplicateItem(false)}
              taskItem={duplicateItem}
            />
          )}
          <ToDoList
            toDoList={toDoList}
            handleToggle={handleToggle}
            handleFilter={handleFilter}
            handleDelete={handleDelete}
          />
        </div>
      </div>
    </div>
  );
};

export default TodoApp;
