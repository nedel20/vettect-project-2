import React  from "react";
import IncompleteTable from "./IncompleteTable";
import { useState } from "react";

const CompleteTable = ({
  taskList,
  taskComList,
  completeTask
}) => {


  
  return (
    <>
      <form>
        <h2>Completed Tasks</h2>
        <table>
          <thead>
            <tr>
              <th>Task ID</th>
              <th>Task</th>
              <th>Task Options</th>
            </tr>
          </thead>
          <tbody>
            {Object.values(completeTask).map((task, index) => {
              return (
                <tr key={task.chore}>
                  <td>{Number(index + 1)}</td>
                  <td>{task.chore}</td>
                  {/* <td>
        <button
        type="button"
        onClick={ ()=>handleDeleteClick(parentTask.id)}>Delete</button>
      </td> */}
                </tr>
              );
            })}
          </tbody>
        </table>
      </form>
    </>
  );
};

export default CompleteTable;
