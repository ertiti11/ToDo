import { useState, useEffect } from "react";
import { getTasksWithKeyword, records } from "../../services/getTasks";
import TaskCard from "../TaskCard/TaskCard";
import "./TaskList.css";

export default function TaskList({ keyword = "" }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    if (keyword !== "") {
      getTasksWithKeyword(keyword)
        .then((res) => {
          setData(res.items);
        })
        .catch((error) => {
          console.error("Error fetching tasks:", error);
        });
    }
  }, [keyword]);

  if (keyword === "") {
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
  } else {
    return (
      <div className="taskList">
        {data.map((task) => (
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
}
