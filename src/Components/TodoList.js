import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

const TodoList = ({ todos, setTodos, setEditTodo }) => {
    const handleComplete = (todo) => {
        setTodos(todos.map((item) => {
            if (item.id === todo.id) {
             return {...item, completed: !item.completed}
            }
            return item;
        }));
        alert("Task Completed")
    
      };
      
  const handleEdit = ({id}) =>{
    const findTodo =todos.find((todo) => todo.id === id);
    setEditTodo(findTodo);
    alert("Please Edit")
  }
      
  const handleDelete = ({ id }) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  
  return (
    
    <div>
      {todos.map((todo) => (
        <li className="list-item" key={todo.id}>
          <input
            type="text"
            // value={TransformStreamDefaultController.title}
            value={todo.title}
            className={`list ${todo.completed?"complete":""}`}
            onChange={(event) => event.preventDefault()}
          />
          <div>
            {/* Complete button */}
            <button
              className="button-complete taskbutton"
              onClick={() => handleComplete(todo)}
            >
              <i className="fa fa-check-circle"></i>
            </button>

            {/* Edit button */}
            <button className="button-edit taskbutton" onClick={() =>handleEdit(todo)}>
              <i className="fa fa-edit"></i>
            </button>

            {/* Delete button */}
            <button
              className="button-delete taskbutton"
              onClick={() => handleDelete(todo)}
            >
              <i className="fa fa-trash"></i>
            </button>
          </div>
        </li>
      ))}
    </div>
  );
};

export default TodoList;
