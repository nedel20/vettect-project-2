import React from "react";
import { useRef } from "react";


const EditContent = ({ parentTask,index }) => {
  // variable to pass data using useRef()
  const taskRef = useRef();
  const handleEditClick =(event, parentTask) =>{
event.preventDefault();
setEditTask(parentTask.id);
}


  return (
    <tr>
      
      <td>{Number(index + 1)}</td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter a task..."
          ref={taskRef}
        ></input>
        
      </td>
    </tr>
  );
};

export default EditContent;
