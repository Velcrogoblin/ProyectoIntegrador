import Card from './Card';
import styles from "./Cards.module.css"

export default function Cards(props) {
   const { characters } = props;
   return (
   <div className={styles.Cartas}>
      {characters.map((char) => (
         <Card
         id = {char.id}
         key = {char.id}
         name={char.name}
         species={char.species}
         gender={char.gender}
         image={char.image}
         onClose={() => props.onClose(char.id)}
       />
      ))}
   </div>
)}
