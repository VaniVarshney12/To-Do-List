import React from 'react'
import {TOL} from "./TOL"

export const TOS = (props) => {
  return (
    <div className='container '>
        <h4 className=' my-2'>ToDo List</h4>
        {props.todos.length===0?<div className="card m-5" >
  <span className="visually-hidden">Loading...</span>
  <h5 className="text-center display-inline p-2">no task left</h5>
</div>:
    props.todos.map((todo)=>{
            return <TOL todo={todo} key={todo.sno}   onDelete={props.onDelete}/>
        })
    }
    </div>
  )
}