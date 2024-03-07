import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';
import Botao from './botao/botao';
import Titulo from './titulo/Titulo';
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
      <Titulo classe="titulo red">Titulo</Titulo>
      <h1> Use Effect foi chamado {useEffectCounter} vezes</h1>
      <Botao tarefa={Logar} classe="botao blue"> Fazer Login </Botao>
      <Botao tarefa={Deslogar} classe="botao red"> Deslogar </Botao>
    </div>
  );
}

export default App;
