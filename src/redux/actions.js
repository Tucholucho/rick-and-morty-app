import { ADD_FAVORITE, REMOVE_FAVORITE } from "./action-types";

export const addFavorite = (character) => {
    return {type:"ADD_FAVORITE", payload: character}
}

export const removeFavorite = (character) => {
    return {type:"REMOVE_FAVORITE", payload: character.id}
}

export const filterCards = (character) => {
    return {type:"FILTER", payload: character.gender}

}

export const orderCards = (character) => {
    return{type:"ORDER", payload: character.id}
}