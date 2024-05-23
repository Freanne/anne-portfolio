import { useState } from "react"
import Header from "./components/Header"
import NavBar from "./components/NavBar"
import Projects from "./components/Projects"
import Skills from "./components/Skills"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

function App() {
   const [darkMode, setDarkMode] = useState(false);
   
   const toggleDarkMode = () => {
      setDarkMode(!darkMode);
   }

  return (
   <div className={`app ${darkMode ? "dark" : "light"}`}>
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
      <Skills darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Projects darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Contact darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
      <Footer darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
   </div>
    )
}

export default App

