import React from "react";

const EditContent = ( {parentTask, editTaskFormData, handleEditButtonSubmit,index }) => {
  return (
    <tr key={parentTask.chore}>
      <td>{Number(index + 1)}</td>
      <td>
        <input
          type="text"
          name="chore"
          required="required"
          placeholder="Enter a task..."
          value={editTaskFormData.chore}
          onChange={handleEditButtonSubmit}
        ></input>
      </td>
      <td>
        <button type="submit">Save</button>
      </td>
    </tr>
  );
};

export default EditContent;
