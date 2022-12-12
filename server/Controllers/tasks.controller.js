import { pool } from "../db.js";
export const getTasks = async (req, res) => {
    try {
      const [result] = await pool.query(
        "SELECT * FROM tasks ORDER BY createAt ASC"
      );
      res.json(result);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };
export const getTask=async(req,res)=>{
    try{
        const id=req.params.id;
        const [result]= await pool.query("SELECT * FROM `tasks` where id=?",id);
        if(result.length===0){
            return res.status(404).json({message:"Tarea no encontrada"}); 
            }
        res.json(result[0])
    }catch(error){
        return res.status(500).json({message: "Error de conexion"});
    }
}
export const createTask=async(req,res)=>{
    try{
        const {title,description}=req.body;
        const [result] = await pool.query("INSERT INTO tasks(title, description) VALUES (?,?)",
        [title,description]
        );
        res.json({
            id:result.insertId,
            title,
            description
        })
    }catch(error){
        return res.status(500).json({message: "Error de conexion"});
    }
}
export const updateTask=async(req,res)=>{
    try{
        const id=req.params.id;
        const body=req.body;
        const [result] = await pool.query("UPDATE `tasks` SET ? where id=?",
        [body,id]
        );
        if(result.affectedRows===0){
            return res.status(404).json({message:"Tarea no encontrada"}); 
        }
        return res.sendStatus(200);
    }catch(error){
        return res.status(500).json({message: "Error de conexion"});
    }
}

export const deleteTask=async(req,res)=>{
    try{
        const id=req.params.id;
        const [result]= await pool.query("DELETE FROM `tasks` WHERE id=?",id);
        if(result.affectedRows===0){
            return res.status(404).json({message:"Tarea no encontrada"}); 
        }
        return res.sendStatus(204);
    }catch(error){
        return res.status(500).json({message: "Error de conexion"});
    }
}