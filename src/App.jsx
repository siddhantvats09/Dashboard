import { useState } from 'react'
import './App.css'
import Side from './components/Side'
import Maincontainer from './components/Maincontainer'

function App() {
  

  return (
    <>
    <div className="appcontainer">
      <div className="sidediv">
      <Side/>
      </div>
      <div className="contentdiv">

    <Maincontainer/>
      </div>
    </div>
    {/* <Side/> */}
      {/* <Dounet/> */}
    </>
  )
}

export default App
