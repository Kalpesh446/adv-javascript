import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import ClassComHeader from "./componentweb/ClasscomHeader.jsx";
import ClassComnav from "./componentweb/ClassComnav.jsx";
import Classfunmain from "./componentweb/Classfunmain.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
// ===============================================================
// let head = (
//   <header>
//     <h1>My Website</h1>
//   </header>
// );
// let nav = (
//   <nav>
//     <ul>
//       <li>Home</li>
//       <li>About</li>
//       <li>Contact</li>
//     </ul>
//   </nav>
// );
// let main = (
//   <main>
//     <h2>Welcome to My Website</h2>
//     <p>This is the main content of my webpage.</p>
//   </main>
// );
// let footer = (
//   <footer>
//     <p>&copy; 2023 My Website. All rights reserved.</p>
//   </footer>
// );

// <React.StrictMode>
//   <div>
//     {head}
//     {nav}
//     {main}
//     {footer}
//   </div>
//   {/* <App /> */}
//   {/* {Header} */}
// </React.StrictMode>
// );
