import { Link } from "react-router-dom"


const Navbar = () => {
  return (
    <div>
    <h1>React con mysql crud</h1>
    <ul>
        <li>
            <Link to="/">Inicio</Link>
        </li>
        <li>
            <Link to="/new">Crear Tarea</Link>
        </li>
        <li>
            <Link to=""></Link>
        </li>
    </ul>
    </div>
  )
}

export default Navbar