import { BrowserRouter, Route, Link, useParams } from "react-router-dom";
import { useState } from "react";

function Saludo() {
  return <p>Hola {useParams().nombre}</p>;
}

function App() {
  const [nombre, setNombre] = useState("");
  function cambiarNombre(e) {
    setNombre(e.target.value);
  }
  return (
    <BrowserRouter>
      <Route exact path="/">
        <input type="text" value={nombre} onChange={cambiarNombre} />
        <Link to={`/saludo/${nombre}`}>Saludos</Link>
      </Route>
      <Route path="/saludo/:nombre">
        <Saludo />
      </Route>
    </BrowserRouter>
  );
}

export default App;
