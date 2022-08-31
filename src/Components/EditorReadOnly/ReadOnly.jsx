import React from "react";

const ReadOnly = ({parentTask,index}) => {
  return (
    <tr key={parentTask.chore}>
      <td>{Number(index + 1)}</td>
      <td>{parentTask.chore}</td>
      
    </tr>
  );
};

export default ReadOnly;
