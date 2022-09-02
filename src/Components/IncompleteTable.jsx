import React, { Fragment, useState } from "react";
import EditContent from "./EditorReadOnly/EditContent";
// import EditContentForm from "./EditorReadOnly/EditContentForm";
import ReadOnly from "./EditorReadOnly/ReadOnly";

const IncompleteTable = ({ taskList, setTasks }) => {
  const [editTaskId, setEditTaskId] = useState(null);

  const [editTaskFormData, setEditTaskFormData] = useState({
    id: "",
    chore: "",
  });

  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedTask = {
      id: editTaskId,
      chore: editTaskFormData.chore,
    };

    const newTasks = [...taskList];

    const index = taskList.findIndex((value) => value.id === editTaskId);

    newTasks[index] = editedTask;

    setTasks(newTasks);
    setEditTaskId(null);
  };

  // Create form to handle submitted data
  // const handleEditButtonSubmit = (event) => {
  //   event.preventDefault(); // prevents page from refreshing upon submit

  //   const fieldName = event.target.getAttribute("name");
  //   const fieldValue = event.target.value;

  //   const newFormData = { ...editTaskFormData };
  //   newFormData[fieldName] = fieldValue;

  //   setEditTaskFormData(newFormData);
  // };
  
 

  const handleEditClick = (event, taskList) => {
    event.preventDefault();
    setEditTaskId(taskList.id);

    const formValues = {
      id: taskList.id,
      chore: taskList.chore,
    };

    setEditTaskFormData(formValues);
  };

  const handleCancelClick = () => {
    setEditTaskId(null);
  };

  const handleDeleteClick = (editTaskId) => {
    const newTask = [...taskList];

    const index = taskList.findIndex((value) => value.id === editTaskId);

    newTask.splice(index, 1);

    setTasks(newTask);
  };


  return (
    <>
      <h2>Incompleted Tasks</h2>
      <form onSubmit={handleEditFormSubmit}>
        <table>
          <thead>
            <tr>
              <th>Task ID</th>
              <th>The Task At Hand</th>
              <th>Options</th>
            </tr>
          </thead>
          <tbody>
            {taskList.map((parentTask, index) => {
              return (
                <Fragment>
                  {editTaskId === parentTask.id ? (
                    <EditContent
                      parentTask={parentTask}
                      index={index}
                      editTaskFormData={editTaskFormData}
                      setEditTaskFormData={setEditTaskFormData}
                      handleCancelClick={handleCancelClick}
                    />
                  ) : (
                    <ReadOnly
                      parentTask={parentTask}
                      index={index}
                      handleEditClick={handleEditClick}
                      handleDeleteClick={ handleDeleteClick}
                    />
                    //   <tr key={parentTask.chore}>
                    //   <td>{Number(index + 1)}</td>
                    //   <td>{parentTask.chore}</td>

                    // </tr>
                  )}
                </Fragment>
              );
            })}
          </tbody>
        </table>
      </form>
    </>
  );
};

export default IncompleteTable;
