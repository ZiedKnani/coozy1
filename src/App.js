import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Nav from "./Components/Nav.js";
import Home from "./Components/Home/Home.js";
import Step1 from "./Components/Step1/Step1.js";
import Step2 from "./Components/Step2/Step2.js";
import "./App.css";

function App() {
<<<<<<< HEAD
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Nav></Nav>
        </header>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/step1" element={<Step1 />}></Route>
          <Route path="/step2" element={<Step2 />}></Route>
        </Routes>
      </div>
    </Router>
  );
=======
   return (
     <Router>
       <div className="App">
         <header className="App-header">
           <Nav></Nav>
         </header>
         <Routes>
           <Route path="/" element={<Home />}></Route>
           <Route path="/step1" element={<Step1 />}></Route>
           <Route path="/step2" element={<Step2 />}></Route>
        </Routes>
      </div>
     </Router>
   );
>>>>>>> 2e696c7dafe2085888be9de59b9de63e6aefa5f5
}

export default App;
