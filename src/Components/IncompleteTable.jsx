import React, { Fragment,useState }  from "react";
import EditContent from "./EditorReadOnly/EditContent";
import ReadOnly from "./EditorReadOnly/ReadOnly";


const IncompleteTable = ({ parentTasks }) => {

    const [editTask, setEditTask] = useState(null);

    const handleEditClick =(event, parentTasks) =>{
      event.preventDefault();
       setEditTask(parentTasks.id);
      }
   

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
               { editTask === parentTask.id ? <EditContent 
                parentTask={parentTask} 
                index={index}
                /> :( <ReadOnly 
                  parentTask={parentTask} 
                  index={index}
                   handleEditClick={handleEditClick}/>)}
               
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
