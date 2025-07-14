import { useState } from "react";
import { useEffect } from "react";
import styles from './ReposList.module.css';

const ReposList = ({ nomeUsuario }) => {
    const [repos, setRepos] = useState([]);
    const [estaCarregando, setEstaCarregando] = useState(true);
    const [erroDePerfil, setErroDePerfil] = useState(null);

    useEffect (() => {
        setEstaCarregando(true);
        setErroDePerfil(null);
        fetch(`https://api.github.com/users/${nomeUsuario}/repos`)
        .then(res => {
            if (!res.ok) {
                throw Error('Desculpa, mas o nome do perfil não existe.');
            } return res.json();
        })
        .then(resJson => {
            setTimeout (() => {
                setEstaCarregando(false);
                setRepos(resJson);
            },3000);
    })
           .catch(error => {
            setEstaCarregando(false);
            setErroDePerfil(error.message);
           }) 
    }, [nomeUsuario]);

    return (
        <div className="container">
        {estaCarregando ? (
            <h1>Carregando..</h1>
        ) : erroDePerfil ? (
            <h2>{erroDePerfil}</h2>
        ) : (
           <ul className={styles.list}>
            {repos.map(({ id, name, language, html_url}) => (
                <li className={styles.listItem} key={id}>
                    <div className={styles.itemName}>
                    <b>Nome:</b>
                     {name}
                    </div>
                    <div className={styles.itemLanguage}>
                    <b>Linguagem:</b>
                     {language}
                    </div>
                    <a className={styles.itemLink} target="_blank" href={html_url}>Visitar no Github</a>
                </li>
            ))}
        </ul>
        )}
        </div>
        
    )
}

export default ReposList;