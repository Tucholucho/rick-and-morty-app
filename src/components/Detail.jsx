import { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Detail = () => {

    const {detailId} = useParams();
    const [character,setCharacter]  = useState({});

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
        return setCharacter({});
      }, [detailId]);

    return(
        <div>
            <button>
                <Link to='/home'>Home</Link>
            </button>
            <h1> Nombre: </h1>
            <span>{character?.name}</span>
            <hr />
            <div>
                <img src={character?.image} alt={character.name} />
            </div>
            <hr />
        <h2> Status: </h2>
        <h3>{character?.status === "Alive" ? ( 
            <p>⯄ Alive</p>):(
            <p>🕱 Dead</p>
            )
        }</h3>
        <hr />
        <h2> Gender: </h2>
        <span>{character?.gender}</span>
        <h2> Specie: </h2>
        <span>{character?.species}</span>
        <h2> Origin: </h2>
        <span>{character?.origin?.name}</span>
        </div>
    )
}

export default Detail;