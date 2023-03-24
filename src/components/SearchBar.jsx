import {useState} from "react"

export default function SearchBar(props) {

   const [character, setCharacter] = useState ("");

   const handleInputChange = (e) => {
      setCharacter(e.target.value);
      console.log(e.target.value);
   }

   return (
      <div>
         <input type='search' onChange= {handleInputChange}/>
      <button onClick={() => props.onSearch(character)}>Agregar</button>
      </div>
   )
}
