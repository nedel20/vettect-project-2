import React, { Fragment, useState } from "react";
import EditContent from "./EditorReadOnly/EditContent";
// import EditContentForm from "./EditorReadOnly/EditContentForm";
import ReadOnly from "./EditorReadOnly/ReadOnly";

const IncompleteTable = ({
  taskList,
  completeTask,
  setTasks,
  setCompleteTask,
  createNewTableData,
  newTaskList,
  setNewTaskList,
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

    const index = taskList.findIndex((value) => value.id === editTaskId);

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
  const handleCompleteClick = (completedTaskId, completeTask) => {
    const newTask = [...taskList];

    let newSliceTask = [];

    const index = taskList.filter((value) => value.id === completedTaskId);

    // Copy of selected task
    newSliceTask = newTask.slice(index, 1);

    // Remove the clicked task
    newTask.splice(index, 1);

    // const newSliceTask = [...completeData, temp ];

    setTasks(newTask);
    setCompleteTask(newSliceTask);

    createNewTableData(newSliceTask);
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
                      createNewTableData={createNewTableData}
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
