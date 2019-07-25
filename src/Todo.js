import React from 'react'

function Todo(props){
    console.log(props);
    const MySty = {
        display: "inline",
        padding: "2vw"
    }
    return (
        <div>
            <input type="checkbox"></input>
            <h3 style={MySty}>{props.desc}</h3>
        </div>
    )
}

export default Todo