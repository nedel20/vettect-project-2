import React from "react";
import { useState } from "react";
import AddContentForm from "./Components/Button Components/AddContentForm";
import AddCompleteContentForm from "./Components/Button Components/AddCompleteContentForm";
import CompleteTable from "./Components/CompleteTable";
import IncompleteTable from "./Components/IncompleteTable";
import data from "./data.json";
import data2 from "./data2.json";

/**
 *
 * AddContentForm pass in props to form to  allow access
 */
function App() {
  // passing in data from data file and updating state with data for incomplete table 
  const [taskList, setTasks] = useState(data);

  //  passing in data from data file and updating state with data for completed table 
  const [newTaskList, setNewTaskList] = useState(data2);

  // UseState Variables for Add input form for Incomplete Table 
  const [addFormData, setAddFormData] = useState({
    id: "",
    chore: "",
  });

  // UseState Variables for Add input form for Completed Table 
  const [addCompleteFormData, setAddCompleteFormData] = useState({
    id: "",
    chore: "",
  });

 

  const [completeTask, setCompleteTask] = useState({
    id: "",
    chore: "",
  });  

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
      id: addCompleteFormData.id,
      chore: addCompleteFormData.chore,
    };

    const newTasks = [...newTaskList, newTask];
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

      <h3>Add A New Todo Item</h3>
     
      <AddContentForm
        handleAddFormSubmit={handleAddFormSubmit}
       
        addFormData={addFormData}
        setAddFormData={setAddFormData}
      />

      <CompleteTable newTaskList={newTaskList}/>

      <h3>Add A New Finished Item</h3> 

      <AddCompleteContentForm 
      addCompleteFormData={addCompleteFormData} 
      setAddCompleteFormData={setAddCompleteFormData}
      handleAddCompleteFormSubmit={handleAddCompleteFormSubmit}/>
    </div>
  );
}

export default App;
