import React from 'react'

export default function FOOTER() {
    let footsty={
        position:"absolute",

       top:"100vh",
       width:"100vw",
       justifyContent:"center",
       border:"7px solid grey",
        backgroundColor:"black",
    };
  return (
    <div className=" text-light py-0.6" style={footsty}>
        <p>
            Copyright &copy; My TodoList.com</p>
    </div>
  )
}
