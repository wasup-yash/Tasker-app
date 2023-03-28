import React,{useState} from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";


export default function Createtask({modal , toggle , setmodal , taskList , setTaskList}) {
    const [taskName, setTaskName] = useState('');
    const [description, setDescription] = useState('');

    const saveTask = (taskObj) => {
      let templist = taskList
      templist.push(taskObj)
      localStorage.setItem("taskList" , JSON.stringify(templist))
      setTaskList(templist)
      setmodal(false);
    }


    
    const handleChange =(e)=>{
    const name = e.target.name
    const value = e.target.value
        if(name === "taskName"){
            setTaskName(value)
        }
        else{
            setDescription(value)
        }
    }

    const handleSave =()=>{
      let taskObj ={}
      taskObj["Name"] = taskName
      taskObj["Description"] = description
      saveTask(taskObj)
      setTaskName(" ");
      setDescription(" ");
    }

  return (
    <div>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Create Task</ModalHeader>
        <ModalBody>
         <form>
          <div className="form-group">
            <label>Task name</label>
            <input type="text" className="form-control" value={taskName} onChange={handleChange} name="taskName"/>
          </div>
          <div className="form-group">
            <label>Description</label>
            <textarea  rows="5" className="form-control" value={description} onChange={handleChange} name="description"></textarea>
          </div>
         </form>
        </ModalBody>
        <ModalFooter>
          <Button color="success" onClick={handleSave}>Create</Button>{" "}
          <Button color="danger" onClick={toggle}>Exit</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}
