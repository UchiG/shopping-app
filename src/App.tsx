import React from "react"
import Greeter from "./components/Greeter"
import "./App.css"

function App() {
  return (
    <div className="App">
      <Greeter person="Peter"/>
      <Greeter person="James"/>
      <Greeter person="John"/>

    </div>
  )
}

export default App
