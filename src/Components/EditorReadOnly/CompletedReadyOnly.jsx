import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import UndoIcon from '@mui/icons-material/Undo';

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
        <EditIcon
          type="button"
          onClick={(event) => handleCompleteEditClick(event, task)}
       />
        
      </td>
      <td>
        <DeleteIcon type="button" onClick={() => handleDeleteClick(task.id)}/>
        
      </td>
      <td>
        <UndoIcon
        type="submit"
        onClick={()=>handleUndoCompleteClick(task.id)} />
      </td>
    </tr>
  );
}

export default CompletedReadyOnly;
