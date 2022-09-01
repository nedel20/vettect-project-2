import React from "react";

const ReadOnly = ({parentTask,index, handleEditClick}) => {
  return (
    <tr key={parentTask.chore}>
      <td>{Number(index + 1)}</td>
      <td>{parentTask.chore}</td>
      <td>
        <button 
        type="button"
        onClick={(event) =>handleEditClick(event, parentTask)}
        >Edit</button>
      </td>
    </tr>
  );
};

export default ReadOnly;
