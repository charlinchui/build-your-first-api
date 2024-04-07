import "./App.css";
import MarkdownComponent from "./components/MarkdownComponent.jsx";
import Navbar from "./components/Navbar.jsx";

function App(props) {
  return (
    <div>
      <Navbar language={props.language} />
      <MarkdownComponent file={props.language + ".md"}/>
    </div>
  );
}

export default App;
