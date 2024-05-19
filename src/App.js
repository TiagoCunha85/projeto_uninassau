import React, { useState } from 'react';
import './css/styles.css'; // Importando o arquivo CSS

function App() {
  const [entrada, setEntrada] = useState([]);
  const [item, setItem] = useState('');

  function handleRegister(e) {
    e.preventDefault();
    setEntrada([...entrada, item]);
    setItem('');
  }

  return (
    <div>
      <h1>Cadastro de usuários</h1>
      <br/>
      <form onSubmit={handleRegister}>
        <label>Produto:</label>
        <input placeholder="Põe o produto ae" value={item} onChange={(e) => setItem(e.target.value)}/>
        <br/>
        <button type="submit">Cadastrar</button>
      </form>
      <div>
        <ul>
          {entrada.map(entradaS => (
            <li key={entradaS}>{entradaS}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;