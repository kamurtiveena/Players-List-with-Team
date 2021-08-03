import React from 'react'
import Footer from './Footer'
import AddPlayer from '../containers/AddPlayer'
import VisiblePlayerList from '../containers/VisiblePlayerList'

const App = () => (
  <div>
    <div style={{color:"#4d1073",align:"center", padding:"20%"}}> Welcome To Vico Binary Team </div>
    <AddPlayer />
    <VisiblePlayerList />
    <Footer />
  </div>
) 

export default App