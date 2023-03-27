import React , {useState} from 'react';
import Createtask from './Createtask';

export default function Tasker() {
  const [modal, setmodal] = useState(false);
  const toggle =()=>{
    setmodal(!modal); 
  } 
  return (
    <>
    <div className='header text-center'>
   <h3>Tasker</h3>
   <button className='btn btn-primary mt-2' onClick={()=>setmodal(true)}>Create Task</button>
    </div>
    <div className="task-container">

    </div>
    <Createtask toggle={toggle} modal={modal}/>
   </>
  )
}
