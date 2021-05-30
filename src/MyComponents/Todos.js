import React from 'react'
import {TodoItem} from "../MyComponents/TodoItem"


export const Todos = (props) => {
    let myStyle = {
        minHeight:"60vh"
    }
    return (
        <div className="container my-3" style={myStyle}>
            <h3 className="my-3">Todos List</h3>
            {props.todos.length===0? "No Todos To Display ":
            props.todos.map((todo)=>{
                return(
                 <TodoItem todo={todo} onDelete={props.onDelete}></TodoItem>
                 )
            })
            }
            
        </div>
    )
}
