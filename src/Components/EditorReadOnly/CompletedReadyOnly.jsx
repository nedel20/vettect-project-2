import React from "react";

function CompletedReadyOnly({ task, index, handleCompleteEditClick }) {
  return (
    <tr key={task.chore}>
      <td>{Number(index + 1)}</td>
      <td>{task.chore}</td>
      <td>
        <button
          type="button"
          onClick={(event) => handleCompleteEditClick(event, task)}
        >Edit</button>
      </td>
    </tr>
  );
}

export default CompletedReadyOnly;
