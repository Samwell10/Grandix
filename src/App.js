import './App.css';
import Navbar from './Component/Navbar/Navbar';
import Home from './Home/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Services from './Service/Service';
import Footer from './Component/Footer/Footer';
function App() {
  return (
    <BrowserRouter>
    <div className="App">
     <Navbar/>
     <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/services" element={<Services/>}/>
      </Routes>
      <Footer/>
    </div>
    </BrowserRouter>
  );
}

export default App;
