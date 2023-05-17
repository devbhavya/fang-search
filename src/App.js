import Search from "./components/search";
import About from "./components/about";
import Result from "./components/result";
import "./App.css";
import "./components/search.css";
import Links from "./components/links";

function App() {
  return (
    <div className="App">
      <Search></Search>
      <Links></Links>
      <About></About>
      <Result></Result>
    </div>
  );
}

export default App;
