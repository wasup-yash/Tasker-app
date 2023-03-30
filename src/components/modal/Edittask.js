import React, { useEffect, useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

export default function Edittask({
  modal,
  toggle,
  setmodal,
  taskList,
  setTaskList,
  updateTask,
  taskObj,
}) {
  const [taskName, setTaskName] = useState("");
  const [description, setDescription] = useState("");

  const saveTask = (taskObj) => {
    let templist = taskList;
    templist.push(taskObj);
    localStorage.setItem("taskList", JSON.stringify(templist));
    setTaskList(templist);
    setmodal(false);
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    if (name === "taskName") {
      setTaskName(value);
    } else {
      setDescription(value);
    }
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    let tempObj = {};
    tempObj["Name"] = taskName;
    tempObj["Description"] = description;
    updateTask(tempObj);
  };

  useEffect(() => {
    setTaskName(taskObj.Name);
    setDescription(taskObj.Description);
  }, []);

  return (
    <div>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Edit Task</ModalHeader>
        <ModalBody>
          <form>
            <div className="form-group">
              <label>Task name</label>
              <input
                type="text"
                className="form-control"
                value={taskName}
                onChange={handleChange}
                name="taskName"
              />
            </div>
            <div className="form-group">
              <label>Description</label>
              <textarea
                rows="5"
                className="form-control"
                value={description}
                onChange={handleChange}
                name="description"
              ></textarea>
            </div>
          </form>
        </ModalBody>
        <ModalFooter>
          <Button color="success" onClick={handleUpdate}>
            Update
          </Button>{" "}
          <Button color="danger" onClick={toggle}>
            Exit
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}
