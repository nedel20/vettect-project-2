import React from 'react';
import { useRef } from "react";

const AddContentForm = ({addFormData, setAddFormData,handleAddFormSubmit}) => {
    // creating form to input task to table and submit 

    // variable to pass data using useRef()
    const taskRef = useRef(); 
     

    // Create form to handle submitted data
    const handleAddFormChange = (event) =>{
        event.preventDefault();

        const fieldName = event.target.getAttribute("name");
        const fieldValue = event.target.value;
    
        const newFormData = { ...addFormData };
        newFormData[fieldName] = fieldValue;
    
        setAddFormData(newFormData);
    }

    return ( 
        <form onSubmit={  handleAddFormSubmit}>
            <input 
            name='chore'
            placeholder="Input Tasks"
             ref={taskRef} 
             onChange={handleAddFormChange}/>
           <button type='submit'>Add</button>
        </form>
     );
}
 
export default AddContentForm;