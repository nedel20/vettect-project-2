import React, { Fragment } from "react";
import EditContent from "./EditorReadOnly/EditContent";
import ReadOnly from "./EditorReadOnly/ReadOnly";


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
              <Fragment>
                <EditContent />
                <ReadOnly parentTask={parentTask} index={index} />
              </Fragment>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default IncompleteTable;
