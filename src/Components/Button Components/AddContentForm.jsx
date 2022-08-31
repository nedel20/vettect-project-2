import React from 'react';
import { useRef } from "react";

const AddContentForm = (props) => {
    // creating form to input task to table and submit 

    // variable to pass data using useRef()
    const taskRef = useRef(); 
     

    // Create form to handle submitted data
    const handleSubmit = (event) =>{
        event.preventDefault(); // prevents page from refreshing upon submit

        // const task =taskRef.current.value;
        props.setMyTasks({tasks: taskRef.current.value});
    }

    return ( 
        <form>
            <input placeholder="Input Tasks" ref={taskRef} />
            <button onClick={handleSubmit} type="button">Add Tasks</button>
        </form>
     );
}
 
export default AddContentForm;