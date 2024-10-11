import { BrowserRouter, Routes ,Route } from "react-router-dom";
import Material from "./ex1/Material";
import Home from "./ex2/components/Home";
import Navbar from "./Navbar";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/" element={<Material />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
