import React from 'react';
import ReadOnly from './EditorReadOnly/ReadOnly';
// import EditContent from './ButtonComponents/EditContent';


const IncompleteTable = (props) => {

    
    return ( 
        <>
        <h2>Incompleted Tasks</h2>
        <table>
            <thead>
                <tr>
                    <th>Task ID</th>
                    <th>The Task At Hand</th>
                    <th>Options</th>
                </tr>
            </thead>
            <tbody>
            {props.parentTasks.map((parentTask, index) => {
                 return(<ReadOnly parentTask={parentTask} index={index}/>);
                })}
            </tbody>
        </table>
        </>
    );
}
 
export default IncompleteTable;