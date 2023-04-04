import React, { useEffect, useState } from "react";
import { Button } from "reactstrap";
import Card from "./Card";
import Createtask from "./modal/Createtask";

export default function Tasker() {
  const [modal, setmodal] = useState(false);
  const [taskList, setTaskList] = useState([]);
  const toggle = () => {
    setmodal(!modal);
  };

  const saveTask = (taskObj) => {
    taskList.push(taskObj);
    setTaskList(taskList);
    localStorage.setItem("taskList", JSON.stringify(taskList));
    setmodal(false);
  };

  const deleteTask = (index) => {
    taskList.splice(index, 1);
    setTaskList(taskList);
    localStorage.setItem("taskList", JSON.stringify(taskList));
    window.location.reload();
  };

  const updateListArray = (obj, index) => {
    taskList[index] = obj;
    setTaskList(taskList);
    localStorage.setItem("taskList", JSON.stringify(taskList));
    window.location.reload();
  };

  useEffect(() => {
    let arr = localStorage.getItem("taskList");
    if (arr) {
      let obj = JSON.parse(arr);
      setTaskList(obj);
    }
  }, []);

  return (
    <>
      <div className="header text-center">
        <h3>Tasker</h3>
        <Button color="primary" onClick={() => setmodal(true)}>
          Click Me
        </Button>
      </div>
      <div className="task-container">
        {taskList.map((obj, index) => (
          <Card
            taskObj={obj}
            index={index}
            deleteTask={deleteTask}
            updateListArray={updateListArray}
            key={index}
          />
        ))}
      </div>
      <Createtask toggle={toggle} modal={modal} saveTask={saveTask} />
    </>
  );
}
