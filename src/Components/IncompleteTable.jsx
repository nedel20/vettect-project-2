import React from 'react';
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
                    return (
                        <tr key={parentTask.chore}>
                            <td>{index +1 }</td>
                            <td>{parentTask.chore}</td>
                            {/* <td>{EditContent}</td>  */}
                        </tr>
                    );
                })}
            </tbody>
        </table>
        </>
    );
}
 
export default IncompleteTable;