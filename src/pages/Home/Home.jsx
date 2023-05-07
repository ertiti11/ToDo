import TaskList from "../../components/TaskList/TaskList";
import AddTask from "../../components/AddTask/AddTask";
import PocketBase from "pocketbase";

export default function Home() {
  const pb = new PocketBase('http://127.0.0.1:8090');
  console.log(pb.authStore.isValid)
  return (
    <>
      <TaskList />
      <AddTask />
      <button onClick={pb.authStore.clear}>logout</button>
    </>
  );
}
