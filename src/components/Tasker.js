import React , {useState} from 'react';

import Createtask from './Createtask';

export default function Tasker() {
  const [modal, setmodal] = useState(false);
  const [taskList, setTaskList] = useState([]);
  const toggle =()=>{
    setmodal(!modal); 
  } 
  console.log(taskList)
  return (
    <>
    <div className='header text-center'>
   <h3>Tasker</h3>
   <button className='btn btn-primary mt-2' onClick={()=>setmodal(true)}>Create Task</button>
    </div>
    <div className="task-container">
       {taskList.map((obj)=> <li>{obj.Name}</li>)}
    </div>
    <Createtask toggle={toggle} modal={modal} setmodal={setmodal} setTaskList={setTaskList} taskList={taskList}/>
    
    </>
  )
}
