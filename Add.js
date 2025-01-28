import React, { useState } from 'react'


export const Add = (props) => {
const[title,setTitle] =useState("");
const[desc,setDesc]=useState("");

const submit=(e)=>{
e.preventDefault();
if(!title || !desc){alert("cannot be blank");}
props.add(title,desc);
}
  return (
    <div className="container">
        <h4>Add a new Task</h4>
       
        <form onSubmit={submit}>
  <div className="mb-3">
    <label htmlFor="title" className="form-label">Title</label>
    <input type="heading" value={title} onChange={(e)=>{setTitle(e.target.value)}} className="form-control" id="title" aria-describedby="emailHelp"/>

  </div>
  <div className="mb-3">
    <label htmlFor="desc" className="form-label">Description</label>
    <input type="text" value={desc} onChange={(e)=>{setDesc(e.target.value)}} className="form-control" id="desc"/>
  </div>
  <button type="submit" className="btn btn-sm btn-success" >Submit</button>
</form>
  </div>
  )
}
