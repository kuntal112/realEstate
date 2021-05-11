import React from "react"
import Header from "./Components/Header"
import HowItWorks from "./Components/HowItWorks"
import About from "./Components/About"
import Agent from "./Components/Agent"
import Properties from "./Components/Properties"
import Contact from "./Components/Contact"
function App() {
  return (
    <div className="App">
     <Header/>
     <HowItWorks/>
     <About/>
     <Agent/>
     <Properties/>  
     <Contact/>
    </div>
  );
}

export default App;
