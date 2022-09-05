import React from 'react';
import { useState } from 'react';
import AddContentForm from './Components/Button Components/AddContentForm';
import CompleteTable from './Components/CompleteTable';
import IncompleteTable from './Components/IncompleteTable';
import data from './data.json';

/**
 * 
 * AddContentForm pass in props to form to  allow access 
 */
function App() {

  // passing in data from data file and updating state with data
  const [taskList, setTasks] = useState(data); 
  // const [taskComList, setTasksComList] = useState(''); 
  const [completeTask, setCompleteTask] = useState({
    id: "",
    chore: "",
  });
  
  // Creates a new array with contents of the old array in addition to the tasks that needs to be added
  // sets the tasks list to be the new array
  // const addTask =(tasks) =>{
  //   setTasks([...taskList,tasks]);
  // }
  const [addFormData, setAddFormData] = useState({
    id: "",
    chore: "",
  });

  
 

  // const handleCompleteClick =(someTask) =>{
  //   setTasksComList(someTask)
  // }

  const handleAddFormSubmit = (event) => {
    event.preventDefault();

    const newTask = {
      id: addFormData.id,
      chore: addFormData.chore
    };

    const newTasks = [...taskList, newTask];
    setTasks(newTasks);

  };


  return (
    
    
      <div className="App">
        
        <IncompleteTable 
        taskList={taskList}
        setTasks={setTasks}
        completeTask={completeTask}
         setCompleteTask={setCompleteTask}
        />
        
        <h3>Add a Task</h3>
        {/* <AddContentForm setMyTasks={addTask}/>  */}
        <AddContentForm 
        handleAddFormSubmit={handleAddFormSubmit}
        setTasks={setTasks}
        addFormData ={addFormData}
        setAddFormData ={setAddFormData}/>

        <CompleteTable
        taskList={taskList}
        
         completeTask ={completeTask}
         setCompleteTask ={setCompleteTask}
        />
        
      </div>
    
    
  );
}

export default App;
