import axios from "axios";

export const getTasksRequest = async () =>{
    await axios.get("http://127.0.0.1:4000/tasks");
}

export const createTaskRequest=async(task)=>{
   await axios.post('http://127.0.0.1:4000/tasks',task)
}
