import { useSelector, useDispatch } from "react-redux";
import { filterCards, orderCards } from "../redux/actions";
import { Link } from "react-router-dom";

const Favorites = () => {
    const dispatch = useDispatch();
    const {myFavorites} =useSelector(state => state)
    const handlerOrder = (event) =>{
        dispatch(orderCards(event.targer.value))
    }
    const handleFilter = (event) =>{
        dispatch(filterCards(event.targer.value))   
    }

    return(
        <div>
            <div>
                <select onChange={handlerOrder}>
                <option value="Order" disabled>Order by</option>
                <option value="Ascendente">Ascendente</option>
                <option value="Descendente">Descendente</option>
                </select>
                <select onChange={handleFilter}>
                    <option value="Filter" disabled>Filter by</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Unknown">Unknown</option>
                    <option value="Genderless">Genderless</option>
                    </select>
            </div>
            {
                myFavorites.map((character) => {
                    return(
                        <div>
                            <button /*onClick={onClose}*/ key={character.id}>X</button>
                            <Link to={`/detail/${character.id}`}>
                            <h2>{character.name}</h2>
                            </Link>
                            <h2>{character.species}</h2>
                            <h2>{character.genre}</h2>
                            <img src={character.image} alt={character.name}/>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Favorites;