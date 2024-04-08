import "./App.css";
import Navbar from "./components/Navbar.jsx";

function App(props) {
  return (
    <div>
      <Navbar language={props.language} />
    </div>
  );
}

export default App;
