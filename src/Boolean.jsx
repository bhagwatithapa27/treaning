import "./App.css";
import ParentComponent from "./parentcomponent";
import Counter from "./counter";

function App() {
  const [showCounter, setshowCounter] = useState(true);
  const toggle = () => {
    setshowCounter(!showCounter);
  };
  return (
    <>
      {/*<Counter />*/}
      {/*{showCounter && <Counter />} */}
      {/*showCounter ?<h1>Hello</h1>: <h1>Bye</h1>*/}
      <button onClick={toggle}>click to toggle</button>
      {showCounter ? <Counter /> : <h1>No Content</h1>}
    </>
  );
}
export default App;
