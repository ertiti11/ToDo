import TaskList from "../../components/TaskList/TaskList";

export default function Categories({ params }) {
  const { keyword } = params;
  console.log(keyword);
  return <TaskList keyword={keyword} />;
}
