import { useEffect,useState } from "react";
import { getTasksRequest } from "../api/tasks.api.js";
import TaskCard from "../components/TaskCard";

const TasksPage = () => {
  const [tasks, setTasks] = useState([])
  useEffect(() => {
    async function loadTask(){
     const response=await getTasksRequest();
     //console.log(response);
      setTasks(response).data;
    }
    loadTask();
  }, [])
  
  return (
    <div>
      <h1>Tareas</h1>
      {
        tasks.map(task=>(
          <TaskCard task={task} key={task.id}/>
        ))
      }
    </div>
  )
}

export default TasksPage