import React, { useState } from "react";

const EditContent = ({
  editTaskFormData,
  index,
  setEditTaskFormData,
  handleEditFormSubmit,
}) => {
  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...editTaskFormData };
    newFormData[fieldName] = fieldValue;

    setEditTaskFormData(newFormData);
  };

  return (
    <tr key={editTaskFormData}>
      <td>{Number(index + 1)}</td>
      <td>
        <input
          type="text"
          name="chore"
          required="required"
          placeholder="Enter a task..."
          // value={editTaskFormData.chore}
          value={editTaskFormData.chore}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <button type="submit">Save</button>
      </td>
    </tr>
  );
};

export default EditContent;
