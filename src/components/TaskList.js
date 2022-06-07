import React from "react";
import { TASKS } from "../data";
import Task from "./Task";


function TaskList() {
  const Tasks = TASKS.map((eachTask, index)=>{
    return <Task key={index} category={eachTask.category} text={eachTask.text}/>
  })
  return (
    <div className="tasks">
      {/* display a list of tasks using Task component */}
      {Tasks}
    </div>
  );
}

export default TaskList;
