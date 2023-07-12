import React from "react";
import ReactDOM  from "react-dom";
import Navbar from "./Components/Navbar";
import "./style.css"
import About from "./Components/About";
import Section from "./Components/Section";


const App=()=>{
  return(
    <div>
      <Navbar />
      <About />
      <Section title="About" des="The href attribute requires a valid value to be accessible. Provide a valid Provide a valid, navigable address as the href value. If you cannot provide a valid href, but still need the element to resemble a link, use a button and change it with appropriate styles." />
      <Section title="Skills" des="The href attribute requires a valid value to be accessible. Provide a valid Provide a valid, navigable address as the href value. If you cannot provide a valid href, but still need the element to resemble a link, use a button and change it with appropriate styles." />
      <Section title="Experiencec" des="The href attribute requires a valid value to be accessible. Provide a valid Provide a valid, navigable address as the href value. If you cannot provide a valid href, but still need the element to resemble a link, use a button and change it with appropriate styles." />
      <Section title="Qualification" des="The href attribute requires a valid value to be accessible. Provide a valid Provide a valid, navigable address as the href value. If you cannot provide a valid href, but still need the element to resemble a link, use a button and change it with appropriate styles." />

    </div>
  )
}

export default App;
