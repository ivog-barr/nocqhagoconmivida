import "./App.css";
import Signup from "./components/Signup";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Ofertas from "./components/Ofertas";
import CrearOferta from "./components/CrearOferta";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Link to="/signUp">SIGNUP</Link>
      <Link to="/">LOGIN</Link>
      <Link to="/ofertas">OFERTAS</Link>
      <Link to="/crearOferta">Crear oferta</Link>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signUp" element={<Signup />} />
          <Route path="/ofertas" element={<Ofertas/>}/>
          <Route path="/crearOferta" element ={<CrearOferta/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
