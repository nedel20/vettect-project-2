import React  from "react";
import IncompleteTable from "./IncompleteTable";
import { useState } from "react";
import data2 from "../data2.json";

const CompleteTable = ({
  newTaskList,
  setNewTaskList,
   
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
            {newTaskList.map((task, index) => {
              return (
                <tr key={task.chore}>
                  <td>{Number(index + 1)}</td>
                  <td>{task.chore}</td>
                 
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
