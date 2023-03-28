import React from 'react'



export default function Card({taskObj , index , taskList , setTaskList , setModal , modal , toggle}) {
    const colors = [
        {
            primaryColor : "#5D93E1",
            secondaryColor : "#ECF3FC"
        },
        {
            primaryColor : "#F9D288",
            secondaryColor : "#FEFAF1"
        },
        {
            primaryColor : "#5DC250",
            secondaryColor : "#F2FAF1"
        },
        {
            primaryColor : "#F48687",
            secondaryColor : "#FDF1F1"
        },
        {
            primaryColor : "#B964F7",
            secondaryColor : "#F3F0FD"
        }
    ]
    const deleteTask= (index)=>{
        let tempList = taskList
        tempList.slice(index ,1)
        localStorage.getItem("taskLlist",JSON.stringify(tempList))
        setTaskList(tempList)
        window.location.reload()
       }
       const handleDelete=()=>{
        deleteTask(index)
    }
  return (
    <div class = "card-wrapper mr-5">
    <div class = "card-top" style={{"background-color": colors[index%5].primaryColor}}></div>
    <div class = "task-holder">
        <span class = "card-header" style={{"background-color": colors[index%5].secondaryColor, "border-radius": "10px"}}>{taskObj.Name}</span>
        <p className = "mt-3">{taskObj.Description}</p>

        <div style={{"position": "absolute", "right" : "20px", "bottom" : "20px"}}>
            <i class = "far fa-edit mr-3" style={{"color" : colors[index%5].primaryColor, "cursor" : "pointer"}} onClick = {() => setModal(true)}></i>
            <i class="fas fa-trash-alt" style = {{"color" : colors[index%5].primaryColor, "cursor" : "pointer"}} onClick = {handleDelete}></i>
        </div>
</div>
<EditTask modal = {modal} toggle = {toggle} updateTask = {updateTask} taskObj = {taskObj}/>
</div>
  )
}
