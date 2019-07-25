import React from 'react';
import todoData from './todoData';
import Todo from './Todo';
import './App.css';

function App() {
  const todos = todoData.map(todo=>{
    return (
      <Todo key={todo.id} desc={todo.desc} completed={todo.completed}/>
    )
  })
  return (
    <div className="App">
      <header>
        <h1>Todo App 2</h1>
      </header>
      {todos}
    </div>
  );
}

export default App;
