import { useState } from 'react';
import Nome from './Nome';

function App() {
  const[nome, setNome] = useState('');
  const[email, setEmail] = useState('');
  const[idade, setIdade] = useState('');
  const[aluno, setAluno] = useState({});

  function handleRegister(e){
    e.preventDefault();
    alert('O cadastro de bom, meu parceiro.');
    setAluno({
      nome: nome,
      email: email,
      idade: idade,
    })
  }
  return (
    <div>
      <h1>Cadastro de usuários</h1>
   
      <br/>
      <form onSubmit={handleRegister}>
        <label>Nome:</label>
        <input placeholder="Põe teu nome ae" value={nome} onChange={(e) => setNome(e.target.value)}/>
        <br/>
        <label>Email:</label>
        <input placeholder="Põe teu email ae" value={email} onChange={(e) => setEmail(e.target.value)}/>
        <br/>
        <label>Idade :</label>
        <input placeholder="Põe tua idade ae" value={idade} onChange={(e) => setIdade(e.target.value)}/>
        <br/>
        <button type="submit">Cadastrar</button>
      </form>
      <div>
        <span>Bem vindo: {aluno.nome}</span><br/>
        <span>Idade: {aluno.idade}</span><br/>
        <span>Email: {aluno.email}</span><br/> 
    </div>
    </div>
  );
}

export default App;