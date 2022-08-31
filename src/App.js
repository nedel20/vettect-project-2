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

  // Creates a new array with contents of the old array in addition to the tasks that needs to be added
  // sets the tasks list to be the new array
  const addTask =(tasks) =>{
    setTasks([...taskList,tasks]);
  }

  return (
    
    
      <div className="App">
        <IncompleteTable parentTasks={taskList}/>
        <CompleteTable/>
        <AddContentForm setMyTasks={addTask}/> 
      </div>
    
    
  );
}

export default App;
