import React, { useState } from "react";
import './App.css';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [todoName, setTodoName] = useState("");
  const [todoDescription, setTodoDescription] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");

  const addTodo = () => {
    const newTodo = {
      name: todoName,
      description: todoDescription,
      status: "Not Completed"
    };
    setTodos([...todos, newTodo]);
    setTodoName("");
    setTodoDescription("");
  };

  const editTodo = (index, updatedTodo) => {
    const updatedTodos = [...todos];
    updatedTodos[index] = updatedTodo;
    setTodos(updatedTodos);
  };

  const deleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  const filteredTodos = todos.filter(todo => 
    statusFilter === "All" || todo.status === statusFilter
  );

  return (
    <div className="App">
      <header>
        <h1>My Todo</h1>
        <div>
          <input 
            type="text" 
            placeholder="Todo Name" 
            value={todoName} 
            onChange={(e) => setTodoName(e.target.value)} 
          />
          <input 
            type="text" 
            placeholder="Todo Description" 
            value={todoDescription} 
            onChange={(e) => setTodoDescription(e.target.value)} 
          />
          <button onClick={addTodo}>Add Todo</button>
        </div>
        <div>
          <label>Status Filter:</label>
          <select onChange={(e) => setStatusFilter(e.target.value)} value={statusFilter}>
            <option value="All">All</option>
            <option value="Completed">Completed</option>
            <option value="Not Completed">Not Completed</option>
          </select>
        </div>
      </header>

      <main>
        <h2>My Todos</h2>
        {filteredTodos.map((todo, index) => (
          <div key={index} className="todo">
            <div>
              <strong>Name:</strong> {todo.name}
            </div>
            <div>
              <strong>Description:</strong> {todo.description}
            </div>
            <div>
              <strong>Status:</strong>
              <select 
                value={todo.status} 
                onChange={(e) => editTodo(index, { ...todo, status: e.target.value })}
              >
                <option value="Not Completed">Not Completed</option>
                <option value="Completed">Completed</option>
              </select>
            </div>
            <button>Edit</button>
            <button onClick={() => deleteTodo(index)}>Delete</button>
          </div>
        ))}
      </main>
    </div>
  );
};

export default App;
