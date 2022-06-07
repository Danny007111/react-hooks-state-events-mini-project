import React from "react";


function Task({category, text, key}) {
console.log(key)
  function deleteList(index){

  };

  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={deleteList(key)}>X</button>
    </div>
  );
}

export default Task;
