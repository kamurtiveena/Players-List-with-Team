import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddPlayer'
import VisibleTodoList from '../containers/VisibleTodoList'

const App = () => (
  <div>
    <div style={{color:"#4d1073",align:"center", padding:"20%"}}> Welcome To Vico Binary Team </div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
) 

export default App