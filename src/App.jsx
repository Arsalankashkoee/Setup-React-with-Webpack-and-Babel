import "./App.css";
import Counter from "./Components/Counter";

const App = () => {
  return (
    <div className=" App flex flex-col items-center justify-center gap-5">
      <h1>{process.env.NODE_ENV}</h1>
      <h2>{process.env.NAME}</h2>
      <h2>Hi React App </h2>
      <Counter />
    </div>
  );
};

export default App;
