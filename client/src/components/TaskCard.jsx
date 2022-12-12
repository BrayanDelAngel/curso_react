import { HiCheck,HiXMark } from "react-icons/hi2";

const TaskCard = ({task}) => {
  return (
    <div>
            <h2>{task.title}</h2>
            <p>{task.description}</p>
            <span>{task.done ==1 ? <HiCheck/> : <HiXMark/>}</span>
            <span>{task.createAt}</span>
            <button>eliminar</button>
            <button>Editar</button>
    </div>
  )
}

export default TaskCard