import TaskList from "../../components/TaskList/TaskList";

export default function Categories({ params }) {
  const { keyword } = params;

  return <TaskList keyword={keyword} />;
}
