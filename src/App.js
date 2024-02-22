import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';
function App() {
  //Variaveis
  //const [variavel, functionParaMudarValorDaVariavel] = useState("Valor Inicial");
  const [useEffectCounter, setUseEffectCounter] = useState(0);
  const [logado,setLogado] = useState(false);

  useEffect(()=>{
    console.log("useEffect chamado")
    setUseEffectCounter(useEffectCounter + 1)
  }, [logado])


  const Logar = () => {
    setLogado(true);
  }
  const Deslogar = () => {
    setLogado(false);
  }

  return (
    <div>
      <h1> Use Effect foi chamado {useEffectCounter} vezes</h1>
      {logado ? <p> logado</p> : <p> deslogado</p>}
      <button onClick={Logar}>Logar</button>
      <button onClick={Deslogar}>Deslogar</button>
    </div>
  );
}

export default App;
