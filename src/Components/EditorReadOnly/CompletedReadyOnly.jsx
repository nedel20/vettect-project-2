import React from "react";

function CompletedReadyOnly({
  task,
  index,
  handleCompleteEditClick,
  handleDeleteClick,
  handleUndoCompleteClick
}) {
  return (
    <tr key={task.chore}>
      <td>{Number(index + 1)}</td>
      <td>{task.chore}</td>
      <td>
        <button
          type="button"
          onClick={(event) => handleCompleteEditClick(event, task)}
        >
          Edit
        </button>
      </td>
      <td>
        <button type="button" onClick={() => handleDeleteClick(task.id)}>
          Delete
        </button>
      </td>
      <td>
        <button
        type="submit"
        onClick={()=>handleUndoCompleteClick(task.id)} >Undo</button>
      </td>
    </tr>
  );
}

export default CompletedReadyOnly;
