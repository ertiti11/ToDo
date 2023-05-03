import {records} from '../../services/getTasks'
import TaskCard from '../TaskCard/TaskCard'
import './TaskList.css'



export default function TaskList() {

    console.log("tasklist")
    return(
        <div className='taskList'>
        {
            
            records.map((task) => (
                    <TaskCard title={task.titulo} description={task.descripcion} key={task.id} />
                ))
            
        }
        </div>
    )




}
