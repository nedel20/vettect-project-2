import React, { Fragment } from "react";
import EditContent from "./EditorReadOnly/EditContent";
import ReadOnly from "./EditorReadOnly/ReadOnly";

const IncompleteTable = ({ parentTasks }) => {
  return (
    <>
      <h2>Incompleted Tasks</h2>
      <form>
      <table>
        <thead>
          <tr>
            <th>Task ID</th>
            <th>The Task At Hand</th>
            <th>Options</th>
          </tr>
        </thead>
        <tbody>
          {parentTasks.map((parentTask, index) => {
            return (
              <Fragment>
                <EditContent />
                <ReadOnly parentTask={parentTask} index={index} />
              </Fragment>
            );
          })}
        </tbody>
      </table>
      </form>
    </>
  );
};

export default IncompleteTable;
