import { records } from "../../services/getTasks";
import TaskCard from "../TaskCard/TaskCard";
import "./TaskList.css";

export default function TaskList() {
  
  return (
    <div className="taskList">
      {records.map((task) => (
        <TaskCard
          title={task.titulo}
          color={task.color}
          tag={task.tag}
          image={
            "http://127.0.0.1:8090/api/files/0v921almmyrqef1/tpkf9cynwkfpte1/" +
            task.field
          }
          description={task.descripcion}
          key={task.id}
        />
      ))}
    </div>
  );
}
