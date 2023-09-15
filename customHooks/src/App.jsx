// import { useToggle } from "./useToggle";
import Cat from "./components/Cat"
function App() {
  // const {state, toggle} = useToggle();

  return (
    <div>
      {/* <button onClick={toggle}>{state ? "Hide" : "Show"}</button>
      {state && <h1>Now you see me!</h1>} */}
      <Cat />
    </div>
  );
}

export default App;
