import React from 'react';
import todoData from './todoData';
import Todo from './Todo';
import './App.css';

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      todos: todoData,
    }
    this.handleChange=this.handleChange.bind(this)
  }
  handleChange(id){
    console.log("changing", id)
  }
  render(){
    const todos = this.state.todos.map(todo=>{
      return (
        <Todo id={todo.id} key={todo.id} handleChange={this.handleChange} desc={todo.desc} completed={todo.completed}/>
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
  
}

export default App;
