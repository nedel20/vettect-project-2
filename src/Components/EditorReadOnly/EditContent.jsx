import React from 'react';
import SaveIcon from "@mui/icons-material/Save";
import CancelIcon from '@mui/icons-material/Cancel';

const EditContent = ({
  editTaskFormData,
  index,
  setEditTaskFormData,
  handleCancelClick
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
          
          value={editTaskFormData.chore}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <SaveIcon type="submit"/>
      </td>
      <td>
        <CancelIcon type="button" onClick={handleCancelClick}/>
      </td>
    </tr>
  );
};

export default EditContent;
