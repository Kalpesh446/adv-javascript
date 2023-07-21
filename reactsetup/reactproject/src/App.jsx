import React from "react";
import "./App.css";
import "./use_state/FunState";
import FunState from "./use_state/FunState";
import ClassState from "./use_state/ClassState";
import FunProps from "./Props/FunProps";
import ClassProps from "./Props/ClassProps";
import StateProject1 from "./use_state/Project1_fun_state";
import StateProject2 from "./use_state/StateProject2";
import ConditionalTask1 from "./Condition_map/ConditionalTask1";
import ConditionalwithClass from "./Condition_map/ConditionalwithClass";
import MapTask2 from "./Condition_map/MapTask2";
import Listkey from "./List/Listkey";
import StopWatch from "./Stopwatch/StopWatch";
import InputCom from "./Input/InputCom";
function App() {
  return (
    <div>
      {/* {<ClassState />} */}
      {/* <FunProps name="pravinbhai" /> */}
      {/* <FunProps name="chavada" /> */}
      {/* {<ClassProps name="kalpesh" />}
      {<ClassProps name="chavada" />} */}
      {/* {<StateProject1 />} */}
      {/* {<StateProject2 />} */}
      {/* {<ConditionalTask1 />} */}
      {/* {<ConditionalwithClass />} */}
      {/* {<MapTask2 />} */}
      {/* {<Listkey />} */}
      {/* {<StopWatch />} */}
      {<InputCom />}
    </div>
  );
}

export default App;
