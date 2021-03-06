import React from 'react'
import {ACTIONS } from "./App"

function Todo({todo,dispatch}) {
    return (
        <div>
            <span
            style={{color: todo.complete ? '#45CE30' :'#E8290B'}}
            >{todo.name}</span>
            <button
            onClick={()=>{
                dispatch({type:ACTIONS.TOOGLE_TODO,payload:{id:todo.id}})
            }}
            >Toogle</button>
            <button
            
            onClick={()=>{
                dispatch({type:ACTIONS.DELETE_TODO,payload:{id:todo.id}})
            }}
            >Delete</button>
            
        </div>
    )
}

export default Todo
