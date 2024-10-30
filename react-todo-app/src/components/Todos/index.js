import React, {useState} from "react";
import TodoFrom from "./TodoForm";
import TodoList from "./TodoList";

const initialState = [
  { id: 1, message: "Walk the dog" },
  { id: 2, message: "Take out trash" },
  { id: 3, message: "Finish tutorial" }
]

function Todos() {

  const [todoList, setTodoList] = useState(initialState);
  console.log("app.js", todoList);

  return(
    <div>
      <TodoFrom todos={initialState} setTodos={setTodoList} />
      <TodoList todos={todoList} />
    </div>
  )
}

export default Todos;