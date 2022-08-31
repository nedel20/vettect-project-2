import {EditContent} from './ButtonComponents/EditContent';


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
            {props.parentTasks.map((tasks) => {
                    return (
                        <tr key={tasks.task}>
                            <td>{tasks.id}</td>
                            <td>{tasks.task}</td>
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