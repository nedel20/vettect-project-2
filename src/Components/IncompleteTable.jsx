import React, { Fragment, useState } from "react";
import EditContent from "./EditorReadOnly/EditContent";
import ReadOnly from "./EditorReadOnly/ReadOnly";


const IncompleteTable = ({
  taskList,
  setTasks,
  createNewTableData,

}) => {
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

    const index = taskList.findIndex(
      (value) => value.id === editTaskId);

    newTasks[index] = editedTask;

    setTasks(newTasks);
    setEditTaskId(null);
  };

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

  // Button that moves incomplete tasks to completed table
  // upon button click
  const handleCompleteClick = (completedTaskId) => {
    // copy of data that is mutable 
    const newTask = [...taskList];

    

     // filter thru both collections to find matching index
    const index = taskList.findIndex(
      (value) => value.id === completedTaskId);

    
     
    // Remove the clicked task
    createNewTableData(newTask.splice(index,1));
   
    // Update data on Incomplete table 
    setTasks(newTask);   

    
  };

  return (
    <>
      <h3>Incompleted Tasks</h3>
      <form onSubmit={handleEditFormSubmit}>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Task ID</th>
              <th>The Task At Hand</th>
              <th>Options</th>
            </tr>
          </thead>
          <tbody>
            {taskList.map((task, index) => {
              return (
                <Fragment>
                  {editTaskId === task.id ? (
                    <EditContent
                      index={index}
                      editTaskFormData={editTaskFormData}
                      setEditTaskFormData={setEditTaskFormData}
                      handleCancelClick={handleCancelClick}
                    />
                  ) : (
                    <ReadOnly
                      task={task}
                      index={index}
                      handleEditClick={handleEditClick}
                      handleDeleteClick={handleDeleteClick}
                      handleCompleteClick={handleCompleteClick}
                     
                    />
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
