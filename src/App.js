import React from "react"
import Navbar from "./components/Navbar"
import Main from "./components/Main"
import "./index.css"

export default function App() {
  const [darkMode, setDarkMode] = React.useState(false)

  function toggle() {
    setDarkMode(prevMode => !prevMode)
  }
  return (
    <div>
      <Navbar 
      darkMode={darkMode}
      toggle={toggle}
      />
      <Main 
      darkMode={darkMode}
      />
    </div>
  )
}