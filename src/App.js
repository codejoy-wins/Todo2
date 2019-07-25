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
  // this is the hard part.  setting state
  handleChange(id){
    console.log("changing", id)

    this.setState(prevState=>{
      const updatedTodos = prevState.todos.map(todo=>{
        if(todo.id===id){
          todo.completed = !todo.completed
        }
        return todo
      })
      return {
        todos: updatedTodos
      }
    })
  }
  render(){
    const todos = this.state.todos.map(todo=>{
      return (
        <Todo completed = {todo.completed} id={todo.id} key={todo.id} handleChange={this.handleChange} desc={todo.desc} completed={todo.completed}/>
      )
    })
    return (
      <div className="App">
        <header>
          <h1>Todo App 2</h1>
        </header>
        {todos}
        <footer>
          <a href="https://maxjann.com">Jann Software</a>
        </footer>
      </div>
    );
  }
  
}

export default App;
