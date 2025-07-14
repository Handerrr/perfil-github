import { useState } from "react"
import Perfil from "./components/Perfil"
import Formulario from "./components/Formulario"
import ReposList from "./components/ReposList";
import styles from './App.module.css'


function App() {
  const [nomeUsuario, setNomeUsuario] = useState('');
  const [valorInput, setValorInput] = useState('');

  const pesquisa = () => {
    setNomeUsuario(valorInput)
  }

  return (
    <>
    <input className={styles.input} value={valorInput} onChange={(e) => setValorInput(e.target.value)} placeholder="Nome do perfil do Github"/>
      <button className={styles.button} onClick={pesquisa}>Pesquisar!</button>

    {nomeUsuario.length > 4 && (
      <>
        <Perfil nomeUsuario={nomeUsuario} />
        <ReposList nomeUsuario={nomeUsuario} />
      </>
    )}
    
    {/* {formularioEstaVisivel && (
      <Formulario />
    )}
    <button onClick={() => setFormularioEstaVisivel(!formularioEstaVisivel)} type="button">toggle form</button> */}
    </> 
  )
}

export default App
