import "./App.css";
import Signup from "./components/Login-Signup/Signup";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Login from "./components//Login-Signup/Login";

import CrearOferta from "./components/Ofertas/CrearOferta";
import Ofertas from "./components/Ofertas/Ofertas";
import SingleOffer from "./components/Ofertas/SingleOffer";

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
          <Route path="/ofertas/:id" element={<SingleOffer/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
