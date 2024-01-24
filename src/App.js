import Todo from "./Components/Todo";
import "./Components/Todo.css";
import Form from "./Components/Form"; 
import React ,{useState,useEffect} from "react";
import TodoList from "./Components/TodoList";


const App = () => {
  //To save the file in the local storage and to get the item from todos
  const initialState = JSON.parse(localStorage.getItem("todos")) || [];

  const [input, setInput] = useState("");

  //Local Storage value is present in the initialState
  const [todos, setTodos] = useState(initialState);

  //Use state for editing a todo list item
  const [editTodo, setEditTodo] = useState(null);

  useEffect(() => {
    //To have the data to be stored in the form of string
    localStorage.setItem("todos", JSON.stringify(todos));
  },[todos]);
  return (
    <>
    <div className="container">
      <div className="app-wrapper">
        <div>
          <Todo/>
        </div>
        <div>
          {/* To pass usestate data from app.js to file.js using constName ={constName}*/}
        <Form 
        input = {input}
        setInput = {setInput}
        todos = {todos}
        setTodos = {setTodos}
        editTodo = {editTodo}
        setEditTodo = {setEditTodo} 
        />
        </div>
        <div>
          <TodoList todos={todos} setTodos ={setTodos}
          setEditTodo = {setEditTodo}
          />
        </div>
      </div>
    </div>
    </>
  );
}

export default App;
