const CompleteTable = (props) => {
    return ( 
        <>
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
                <tr>
                    <td>1</td>
                    <td>Clean Cat</td>
                    <td>1</td>
                </tr>
            </tbody>
        </table>
        </>
     );
}
 
export default CompleteTable;