import TaskList from "../../components/TaskList/TaskList";
import AddTask from "../../components/AddTask/AddTask";
import { pb } from "../../services/getTasks";

export default function Home() {

  return (

    <>
      <TaskList />
      <AddTask />
      <button onClick={pb.authStore.clear}>logout</button>
    </>
  );
}
