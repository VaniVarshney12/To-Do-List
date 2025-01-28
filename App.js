import './App.css';
import Header from './Components/Header';
import {TOS} from "./Components/TOS";
import {Add} from "./Components/Add";
import FOOTER from "./Components/FOOTER";
import React,{useState} from 'react';

function App() {
const onDelete=(todo)=>{
  console.log("I am onDelete",todo);

setTodos(todos.filter((e)=>{
  return e!==todo;
 
  
}));
}
const add=(title,desc)=>{
  let sno=todos[todos.length-1].sno+1;
  const mytodo={sno:sno,title:title,desc:desc,
  }
  setTodos([...todos,mytodo]
  );
  console.log(mytodo);
}
const[todos,setTodos]=useState([
  {
  sno:1,
  title : "go to market",
  desc:"at 4pm"
},
{
  sno:2,
  title: "register in hackathon",
desc:"at 6pm"
},
]);


  return (
    <>
  <Header title="My TODOS LIST" searchbar={false}/>
  <Add add={add} />
    <TOS todos={todos} onDelete={onDelete}/>
    <FOOTER/>
    </>
  );

}
export default App;
