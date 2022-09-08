import React from "react";

function EditCompleteContent({
  index,
  editCompleteTaskFormData,
  setEditCompleteTaskFormData,
  handleCancelClick,
}) {
    const handleEditFormChange = (event) => {
        event.preventDefault();
    
        const fieldName = event.target.getAttribute("name");
        const fieldValue = event.target.value;
    
        const newFormData = { ...editCompleteTaskFormData };
        newFormData[fieldName] = fieldValue;
    
        setEditCompleteTaskFormData(newFormData);
      };

  return (
    <tr key={editCompleteTaskFormData}>
      <td>{Number(index + 1)}</td>
      <td>
        <input
          type="text"
          name="chore"
          required="required"
          placeholder="Enter a task..."
         
          value={editCompleteTaskFormData.chore}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <button type="submit">Save</button>
      </td>
      <td>
        <button type="button" onClick={handleCancelClick}>Cancel</button>
      </td>
    </tr>
  );
  
}

export default EditCompleteContent;
