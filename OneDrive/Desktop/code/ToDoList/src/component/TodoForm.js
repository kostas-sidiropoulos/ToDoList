import React, {useState} from 'react'
import './style.css'


const TodoForm = ({addTodo}) => {
    const[input,setInput] = useState ("");
    const handleChange = (e) =>{
        setInput(e.target.value);
    }
    const handleSubmit = (e) =>{
        e.preventDefault();
        addTodo(input)
        setInput("")
    }
  return (
   <form className='TodoForm' onSubmit={handleSubmit}>
    <input type="text" placeholder='What is the task today'
    onChange={handleChange} value={input} required
     />
     <button type='sumbit'> Add </button>
   </form>
  )
}

export default TodoForm
