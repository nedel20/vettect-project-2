import React from "react";

const ReadOnly = ({task,index, handleEditClick, handleDeleteClick,handleCompleteClick}) => {
  return (
    <tr key={task.chore}>
      <td>{Number(index + 1)}</td>
      <td>{task.chore}</td>
      <td>
        <button 
        type="button"
        onClick={(event) =>handleEditClick(event, task)}
        >Edit</button>
      </td>
      <td>
        <button
        type="button"
        onClick={ ()=>handleDeleteClick(task.id)}>Delete</button>
      </td>
      <td>
        <button
        type="submit"
        onClick={()=>handleCompleteClick(task.id)} >Complete</button>
      </td>
    </tr>
    
  );
};

export default ReadOnly;
