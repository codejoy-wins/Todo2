import React from 'react'

function Todo(props){
    console.log(props);
    const MySty = {
        display: "inline",
        padding: "2vw"
    }
    const Done = {
        textDecoration: "line-through",
        color: "gold",
        padding: "2vw",
        display: "inline",
    }
    return (
        <div>
            <input onClick={()=>props.handleChange(props.id)} type="checkbox"></input>
            <h3 style= {props.completed ? Done : MySty}>{props.desc}</h3>
        </div>
    )
}

export default Todo