import { useState } from "react";
import { BrowserRouter, Route, Link, useParams } from "react-router-dom";
import "./App.css";

function Operaciones() {
  let numero1 = parseInt(useParams().numero1);
  let numero2 = parseInt(useParams().numero2);
  return (
    <div>
      <p>Suma {numero1 + numero2}</p>
      <p>Resta {numero1 - numero2}</p>
      <p>Multiplicación {numero1 * numero2}</p>
      <p>División {numero1 / numero2}</p>
      <p>Resto {numero1 % numero2}</p>
    </div>
  );
}

function App() {
  const [numero1, setNumero1] = useState(0);
  const [numero2, setNumero2] = useState(0);
  return (
    <BrowserRouter>
      <div>
        <h1>{numero1}</h1>
        <button onClick={() => setNumero1(numero1 + 1)}>Sumar</button>
        <button onClick={() => setNumero1(numero1 - 1)}>Restar</button>
      </div>
      <div>
        <h1>{numero2}</h1>
        <button onClick={() => setNumero2(numero2 + 1)}>Sumar</button>
        <button onClick={() => setNumero2(numero2 - 1)}>Restar</button>
      </div>
      <div>
        <Link to={`/resultados/${numero1}/${numero2}`}>Resultados</Link>
        <button
          onClick={() => {
            setNumero1(0);
            setNumero2(0);
          }}
        >
          Resetear
        </button>
      </div>
      <Route path="/resultados/:numero1/:numero2">
        <Operaciones />
        <Link to="/">Volver</Link>
      </Route>
    </BrowserRouter>
  );
}

export default App;
