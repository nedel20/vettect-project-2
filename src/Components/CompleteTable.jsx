import React, { Fragment, useState } from "react";
import CompletedReadyOnly from "./EditorReadOnly/CompletedReadyOnly";
import EditCompleteContent from "./EditorReadOnly/EditCompleteContent";

const CompleteTable = ({ newTaskList, setNewTaskList }) => {
  const [editCompleteTaskId, setEditCompleteTaskId] = useState(null);

  const [editCompleteTaskFormData, setEditCompleteTaskFormData] = useState({
    id: "",
    chore: "",
  });

  const handleCompleteEditClick = (event, newTaskList) => {
    event.preventDefault();
    setEditCompleteTaskId(newTaskList.id);

    const formValues = {
      id: newTaskList.id,
      chore: newTaskList.chore,
    };

    setEditCompleteTaskFormData(formValues);
  };

  const handleEditCompleteFormSubmit = (event) => {
    event.preventDefault();

    const editedCompletedTask = {
      id: editCompleteTaskId,
      chore: editCompleteTaskFormData.chore,
    };

    const newCompletedTasks = [...newTaskList];

    const index = newTaskList.findIndex(
      (value) => value.id === editCompleteTaskId
    );

    newCompletedTasks[index] = editedCompletedTask;

    setNewTaskList(newCompletedTasks);
    setEditCompleteTaskId(null);
  };

  const handleCancelClick = () => {
    setEditCompleteTaskId(null);
  };

  return (
    <>
      <form onSubmit={handleEditCompleteFormSubmit}>
        <h2>Completed Tasks</h2>
        <table>
          <thead>
            <tr>
              <th>Task ID</th>
              <th>Task</th>
              <th>Task Options</th>
            </tr>
          </thead>
          <tbody>
            {newTaskList.map((task, index) => {
              return (
                <Fragment>
                  
                  {editCompleteTaskId === task.id ? (
                    <EditCompleteContent
                      index={index}
                      editCompleteTaskFormData={editCompleteTaskFormData}
                      setEditCompleteTaskFormData={setEditCompleteTaskFormData}
                      handleCancelClick={handleCancelClick}
                    />
                  ) : (
                    <CompletedReadyOnly
                      task={task}
                      index={index}
                      handleCompleteEditClick={handleCompleteEditClick}
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

export default CompleteTable;
