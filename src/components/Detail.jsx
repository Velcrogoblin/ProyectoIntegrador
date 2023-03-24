import react, {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import styles from "./Detail.module.css"

export default function Detail () {
    const {detailId} = useParams()
    const [character, setCharacter] = useState({});
    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
          .then((response) => response.json())
          .then((char) => {
            if (char.name) {
              setCharacter(char);
            } else {
              window.alert("No hay personajes con ese ID");
            }
          })
          .catch((err) => {
            window.alert("No hay personajes con ese ID");
          });
      }, []);
return (
    <div className = {styles.contenedor}>
        <h1>Name: {character.name}</h1>
        <h1>Species: {character.species}</h1>
        <h1>Gender: {character.gender}</h1>
        <h1>Status: {character.status}</h1>
        <h1>Origin: {character.origin?.name}</h1>
        <img src = {character.image}></img>
    </div>
)
}