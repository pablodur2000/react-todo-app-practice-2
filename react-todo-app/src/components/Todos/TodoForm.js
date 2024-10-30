import React, {useState} from "react";

function TodoFrom( {setTodos, todos} ) {

  const [todo,setTodo] = useState({
    id: '',
    message: ''
  });
  
  const handleChange = (e) =>{
    setTodo({
      id: Date.now(),
      message: e.target.value
    });
  }

  const handleSubmit = (e) =>{
    e.preventDefault();
    setTodos([...todos, todo]);
  }

  return(
    <form onSubmit={handleSubmit}>
      <input
         type="text"
         name="todo"
         value={todo.message}
         placeholder="Enter your Todo item"
         onChange={handleChange}
      />
      <button type="submit">Add item</button>
    </form>
  );
}

export default TodoFrom;