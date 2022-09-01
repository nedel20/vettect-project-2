import React, { Fragment, useState } from "react";
import EditContent from "./EditorReadOnly/EditContent";
// import EditContentForm from "./EditorReadOnly/EditContentForm";
import ReadOnly from "./EditorReadOnly/ReadOnly";


const IncompleteTable = ({ parentTasks }) => {

    

  const [editTask, setEditTask] = useState(null);

  const [editTaskFormData, setEditTaskFormData] = useState({
    id: "",
    chore: "",
  });

  // Create form to handle submitted data
  const handleEditButtonSubmit = (event) => {
    event.preventDefault(); // prevents page from refreshing upon submit

   
    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...editTaskFormData };
    newFormData[fieldName] = fieldValue;

    setEditTaskFormData(newFormData);
  };

  const handleEditClick = (event, parentTasks) => {
    event.preventDefault();
    setEditTask(parentTasks.id);

    const formValues={
      id: parentTasks.id,
      chore: parentTasks.chore
    }

    setEditTaskFormData(formValues);
  };

  return (
    <>
      <h2>Incompleted Tasks</h2>
      <form>
        <table>
          <thead>
            <tr>
              <th>Task ID</th>
              <th>The Task At Hand</th>
              <th>Options</th>
            </tr>
          </thead>
          <tbody>
            {parentTasks.map((parentTask, index) => {
              return (
                <Fragment>
                  {editTask === parentTask.id ? (
                    <EditContent 
                    parentTask={parentTask} 
                    index={index}
                    editTaskFormData={editTaskFormData}
                    handleEditButtonSubmit={handleEditButtonSubmit}/>
                    
                  ) : (
                    <ReadOnly
                      parentTask={parentTask}
                      index={index}
                      handleEditClick={handleEditClick}
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
