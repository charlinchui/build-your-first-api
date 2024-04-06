import "./App.css";
import MarkdownComponent from "./components/MarkdownComponent.jsx";
import Navbar from "./components/Navbar.jsx";
import { useEffect, useState } from "react";



function App() {
  const [language, setLanguage] = useState("Go");
  const [file, setFile] = useState("Language.md");

  const handleSetLanguage = (lang) =>{
    setLanguage(lang);
  }

  return (
    <div>
      <Navbar onLanguageChange={handleSetLanguage}/>
      <h1 className="text-5xl font-bold">{language}</h1>
      {
          language==="JavaScript" ? <MarkdownComponent file="JavaScript.md"/> 
        : language==="TypeScript" ? <MarkdownComponent file="TypeScript.md"/>
        : language==="Go" ? <MarkdownComponent file="Go.md"/> 
        : language==="Ruby" ? <MarkdownComponent file="Ruby.md"/> 
        : language==="Language"?<MarkdownComponent file="Language.md"/> 
        : <div></div>
      }
    </div>
  );
}

export default App;
