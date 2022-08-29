const IncompleteTable = (props) => {
    return ( 
        <>
        <h2>Incompleted Tasks</h2>
        <table>
            <thead>
                <tr>
                    <th>Task ID</th>
                    <th>The Task At Hand</th>
                    <th>Task Options</th>
                </tr>
            </thead>
            <tbody>
            {props.parentTasks.map((task, index) => {
                    return (
                        <tr key={task.tasks}>
                            <td>{index+1}</td>
                            <td>{task.tasks}</td>
                            <td>{index}</td> 
                        </tr>
                    );
                })}
            </tbody>
        </table>
        </>
    );
}
 
export default IncompleteTable;