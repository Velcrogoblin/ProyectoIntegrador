import styles from "./Card.module.css"
import {Link} from "react-router-dom";

export default function Card(props) {
   return (
      <div>
         <div className = {styles.cardDiv}>
         <button className = {styles.botonCerrar} onClick = {props.onClose}>X</button>
         <Link to = {`/detail/${props.id}`} className = {styles.link}>
         <img className = {styles.cardImg}  src={props.image} alt="" />
         <h2>{props.name}</h2>
         <h2>{props.gender}</h2>
         <h2>{props.species}</h2>        
      </Link>
      </div>
      </div>
   );
}
