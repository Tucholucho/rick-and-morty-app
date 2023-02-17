import { useState } from "react";

export default function SearchBar({onSearch}) {
   
const [character,setCharacter] = useState('')

const handleOnChange = (event) => {
   setCharacter(event.target.value)
}

   return (
      <div>
         <input type='search' value={character} onChange={handleOnChange}/>
         <button onClick={() => onSearch(character)}>Agregar</button>
      </div>
   );
}
  