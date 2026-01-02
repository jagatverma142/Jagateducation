import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import OnlineClasses from "./Pages/OnlineClasses";
import Study from "./Pages/Study"; 
import Mock from "./Pages/Mock";
import Gate from "./Pages/Gate";
import JEE from "./Pages/JEE";
import NEET from "./Pages/Neet"



function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/online-classes" element={<OnlineClasses />} />
      <Route path="/study-material" element={<Study />}  />
      <Route path="/mock-tests" element={<Mock />} />
      <Route path="/gate-package" element={<Gate />} />
      <Route path="/jee-package" element={<JEE />} />
      <Route path="/neet-package" element={<NEET />} />
     </Routes>
  );
}

export default App;