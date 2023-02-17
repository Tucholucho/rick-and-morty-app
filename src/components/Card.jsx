import { Link } from "react-router-dom";
import { useDispatch ,useSelector } from "react-redux";
import { useState } from "react";
import { addFavorite, removeFavorite } from "../redux/actions";
import { useEffect } from "react";



function Card({name, genre,species,image,onClose,id}) {
   const dispatch = useDispatch();
   const myFavorites = useSelector(state => state.myFavorites)
   const [isFav,setIsFav] = useState(false)


   const handleFavorite = () => {
      if (isFav){
         setIsFav(false);
         dispatch(removeFavorite({id}))
      } else{
         setIsFav(true);
         dispatch(addFavorite({name, genre,species,image,onClose,id}))
      }
   }

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);

   return (
      <div>
         {
            isFav ? (
               <button onClick={handleFavorite}>❤️</button>
            ) : (
               <button onClick={handleFavorite}>🤍</button>
            )  
         }
         <button onClick={onClose}>X</button>
         <Link to={`/detail/${id}`}>
            <h2>{name}</h2>
         </Link>
         <h2>{species}</h2>
         <h2>{genre}</h2>
         <img src={image} alt={name}/>
      </div>
   );
}

export default Card;