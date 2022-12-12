import {Formik,Form} from 'formik';
import { createTaskRequest } from "../api/tasks.api";
const TaskForm = () => {
  return (
    <div>
      <Formik 
        initialValues={{
          title:'',
          description:'',
        }}
        onSubmit={async(values,actions)=>{
          console.log(values);
          try{
            const response=await createTaskRequest(values);
            console.log(response);
            actions.resetForm();
          }catch(error){
            console.log(error);
          }
        }}
        >
        {({handleChange,handleSubmit,values,isSubmitting})=>(
          <Form onSubmit={handleSubmit}>
          <label>Titulo</label>
          <input type="text" name="title" placeholder='Titulo de la tarea' onChange={handleChange} value={values.title}/>
          <label>Descripcion</label>
          <textarea name='description' rows='3' placeholder='Descripcion de la tarea' onChange={handleChange} value={values.description}></textarea>
          <button type='submit' disabled={isSubmitting}>{isSubmitting ? "Guardando.." :"Guardar"}</button>
        </Form>
        )}
      </Formik>
    </div>
  )
}

export default TaskForm