import { BrowserRouter, Route, Routes } from "react-router-dom";

import Menu from "./components/Menu";
import About from "./pages/about";
import Home from "./pages/home";


function App() {
  return (
    <BrowserRouter>
      <Menu/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/sobre" element={<About/>}/>
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
