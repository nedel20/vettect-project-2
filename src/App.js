import React from "react";
import { useState } from "react";
import AddContentForm from "./Components/Button Components/AddContentForm";
import CompleteTable from "./Components/CompleteTable";
import IncompleteTable from "./Components/IncompleteTable";
import data from "./data.json";
import data2 from "./data2.json";

/**
 *
 * AddContentForm pass in props to form to  allow access
 */
function App() {
  // passing in data from data file and updating state with data
  const [taskList, setTasks] = useState(data);

  const [addFormData, setAddFormData] = useState({
    id: "",
    chore: "",
  });

 

  const [completeTask, setCompleteTask] = useState({
    id: "",
    chore: "",
  });

  const [newTaskList, setNewTaskList] = useState(data2);

  // Creates a new array with contents of the old array in addition to the tasks that needs to be added
  // sets the tasks list to be the new array
 

  

  const handleAddFormSubmit = (event) => {
    event.preventDefault();

    const newTask = {
      id: addFormData.id,
      chore: addFormData.chore,
    };

    const newTasks = [...taskList, newTask];
    setTasks(newTasks);
  };

  const handleAddCompleteFormSubmit =(event) =>{
    event.preventDefault();

    const newTask = {
      id: addFormData.id,
      chore: addFormData.chore,
    };

    const newTasks = [...taskList, newTask];
    setNewTaskList(newTasks);
  }

  const createNewTableData = (task) => {
    
    let newTasks = [...newTaskList,...task];
    setNewTaskList(newTasks);
  };

  return (
    <div className="App">
      <IncompleteTable
        taskList={taskList}
        setTasks={setTasks}
        completeTask={completeTask}
        setCompleteTask={setCompleteTask}
        createNewTableData ={createNewTableData }
      />

      <h3>Add a Task</h3>
     
      <AddContentForm
        handleAddFormSubmit={handleAddFormSubmit}
        setTasks={setTasks}
        addFormData={addFormData}
        setAddFormData={setAddFormData}
      />

      <CompleteTable newTaskList={newTaskList} completeTask={completeTask} />
    </div>
  );
}

export default App;
