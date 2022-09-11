import React from "react";

import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import CheckIcon from '@mui/icons-material/Check';

const ReadOnly = ({
  task,
  index,
  handleEditClick,
  handleDeleteClick,
  handleCompleteClick,
}) => {
  return (
    <tr key={task.chore}>
      <td>{Number(index + 1)}</td>
      <td>{task.chore}</td>
      <td className="col-sm-1">
        <EditIcon
          type="button"
          onClick={(event) => handleEditClick(event, task)}
        />
      </td>
      <td>
        <DeleteIcon type="button" onClick={() => handleDeleteClick(task.id)} />
      </td>
      <td>
        <CheckIcon type="submit" onClick={() => handleCompleteClick(task.id)}/>
          
        
      </td>
    </tr>
  );
};

export default ReadOnly;
