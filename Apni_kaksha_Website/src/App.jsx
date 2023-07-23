import { useState } from "react";
import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import ClassFunhome from "./component/ClassFunhome";

function App() {
  const [count, setCount] = useState(0);

  return <>{<ClassFunhome />}</>;
}

export default App;
