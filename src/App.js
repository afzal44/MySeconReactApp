// import logo from './logo.svg';
import './App.css';
import React,{ useEffect, useState } from 'react';
import Header from './MyComponents/Header';
import {Todos} from './MyComponents/Todos';
import {Footer} from './MyComponents/Footer';
import {AddTodo} from './MyComponents/AddTodo';
import {About} from './MyComponents/About';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  let initTodo;
  if(localStorage.getItem("todos")===null){
    initTodo = [];
      }
    else{
      initTodo = JSON.parse(localStorage.getItem("todos"));
    }
  const addTodo = (title,desc)=>{
    console.log("i am adding these todo ",title,desc)
    let sno;
    if(todos.length===0){
      sno = 1
    }
    else{
    sno = todos[todos.length-1].sno +1;}
    const mytodo = {
      sno: sno,
      title: title,
      desc: desc
    }
    setTodos([...todos,mytodo])
    console.log(mytodo)
    
  }
  const onDelete = (todo) => {
    // console.log("I AM OnDelete of todo",todo)
    setTodos(todos.filter((e)=>{
      return e!==todo;
    }));
    // localStorage.setItem("todos",JSON.stringify(todos))
  }
const [todos,setTodos]=useState([initTodo]);
useEffect(() => {
  localStorage.setItem("todos",JSON.stringify(todos))
}, [todos])
return (
    <>
    <Router>
     <Header title="My Todos List" searchBar={true}/>
     <Switch>
          <Route exact path="/" render={()=>{
            return( <>
            <AddTodo addTodo={addTodo}></AddTodo>
            <Todos todos={todos} onDelete={onDelete}/>
            </>)
          }}>

            </Route>
          <Route exact path="/about">
            <About />
          </Route>
         
      </Switch>
          <Footer/>
     </Router>
    </>
  );
}

export default App;
