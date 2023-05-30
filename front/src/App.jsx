import { Route, Routes } from "react-router-dom";
import Home from "../src/pages/Home";
import Add from "../src/pages/Add";
import Detail from "../src/pages/Detail";
import Navbar from "../src/components/Navbar";
import Footer from "../src/components/Footer";
function App() {

  return (
    <>
     <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<Add />} />
        <Route path="/detail/:id" element={<Detail/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
