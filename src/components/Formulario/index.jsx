import { useState, useEffect } from "react";

const Formulario = () => {
      let [materiaA, setMateriaA] = useState(0);
      let [materiaB, setMateriaB] = useState(0);
      let [materiaC, setMateriaC] = useState(0);
      let [nome, setNome] = useState('');

      useEffect(() => {
        console.log("o componente iniciou");

        return () => {
            console.log("o componente finalizou")
        }
      }, []);
      const alteraNome = (evento) => {
        setNome(estadoAnterior => {
            return evento.target.value;
        })
      }

const renderizaResultado = () => {
    const soma = materiaA + materiaB + materiaC;
    const media = soma / 3;

    if (media >= 7) {
        return (
            <p>olá {nome}, Você foi aprovado</p>
        )
    } else {
        return (
            <p>olá {nome}, Você não foi aprovado</p>
        )
    }
}

    return (
        <form>
            <ul>
                {[1,2,3,4,5].map(item => {
                    <li key={item}>{item}</li>
                })}
            </ul>
            
            <input type="text" placeholder="Seu nome" onChange={alteraNome} />
            <input type="number" placeholder="nota matéria A" onChange={evento => setMateriaA(parseInt(evento.target.value))} />
            <input type="number" placeholder="nota matéria B" onChange={evento => setMateriaB(parseInt(evento.target.value))} />
            <input type="number" placeholder="nota matéria C" onChange={evento => setMateriaC(parseInt(evento.target.value))}/>
            {renderizaResultado()}
        </form>
    )
}

export default Formulario