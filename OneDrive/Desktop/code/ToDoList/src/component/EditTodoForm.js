import React, {useState} from 'react'


const EditTodoForm = ({editTodo, task}) => {
    const[input,setInput] = useState (task.task);
    const handleChange = (e) =>{
        setInput(e.target.value);
    }
    const handleSubmit = (e) =>{
        e.preventDefault();
        editTodo(input, task.id)
        setInput("")
    }
  return (
   <form className='TodoForm' onSubmit={handleSubmit}>
    <input type="text" placeholder='update task'
    onChange={handleChange} value={input} required
     />
     <button type='sumbit'> update </button>
   </form>
  )
}

export default EditTodoForm
