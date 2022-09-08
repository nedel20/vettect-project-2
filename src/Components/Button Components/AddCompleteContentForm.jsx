import React from "react";
import { useRef } from "react";

const AddCompleteContentForm = ({
  handleAddCompleteFormSubmit,
  addCompleteFormData,
  setAddCompleteFormData,
}) => {
  // creating form to input task to table and submit

  // variable to pass data using useRef()
  const taskRef = useRef();

  // Create form to handle submitted data
  const handleAddCompleteFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...addCompleteFormData };
    newFormData[fieldName] = fieldValue;

    setAddCompleteFormData(newFormData);
  };

  return (
    <form onSubmit={handleAddCompleteFormSubmit}>
      <input
        name="chore"
        placeholder="Input Completed Tasks"
        ref={taskRef}
        onChange={handleAddCompleteFormChange}
      />
      <button type="submit">Add Complete Item</button>
    </form>
  );
};

export default AddCompleteContentForm;
