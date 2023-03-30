import React from "react";

import Edittask from "./modal/Edittask";

export default function Card({
  taskObj,
  index,
  taskList,
  setTaskList,
  setmodal,
  modal,
  toggle,
  deleteTask,
  updateListArray,
}) {
  const colors = [
    {
      primaryColor: "#5D93E1",
      secondaryColor: "#ECF3FC",
    },
    {
      primaryColor: "#F9D288",
      secondaryColor: "#FEFAF1",
    },
    {
      primaryColor: "#5DC250",
      secondaryColor: "#F2FAF1",
    },
    {
      primaryColor: "#F48687",
      secondaryColor: "#FDF1F1",
    },
    {
      primaryColor: "#B964F7",
      secondaryColor: "#F3F0FD",
    },
  ];
  const updateTask = (obj) => {
    updateListArray(obj, index);
  };
  return (
    <div className="card-wrapper mr-5">
      <div
        className="card-top"
        style={{ "backgroundColor": colors[index % 5].primaryColor }}
      ></div>
      <div className="task-holder">
        <span
          className="card-header"
          style={{
            "backgroundColor": colors[index % 5].secondaryColor,
            "borderRadius": "10px",
          }}
        >
          {taskObj.Name}
        </span>
        <p className="mt-3">{taskObj.Description}</p>

        <div style={{ position: "absolute", right: "20px", bottom: "20px" }}>
          <i
            className="far fa-edit mr-3"
            style={{ color: colors[index % 5].primaryColor, cursor: "pointer" }}
            onClick={() => setmodal(true)}
          ></i>
          <i
            className="fas fa-trash-alt"
            style={{ color: colors[index % 5].primaryColor, cursor: "pointer" }}
            onClick={()=> deleteTask(index)
            }
          ></i>
        </div>
      </div>
      <Edittask
        modal={modal}
        toggle={toggle}
        updateTask={updateTask}
        taskObj={taskObj}
      />
    </div>
  );
}
