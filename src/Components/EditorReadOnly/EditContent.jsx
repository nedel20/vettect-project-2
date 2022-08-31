import React from 'react'
import { useRef } from 'react'

const EditContent = () => {

     // variable to pass data using useRef()
     const taskRef = useRef(); 

  return (
    
      
    <tr>
      <td>
        <input 
        type="text"
        required="required"
        placeholder="Enter a task..."
        ref={taskRef}
        >
          
        </input>
      </td>
    </tr>
  )
}

export default EditContent