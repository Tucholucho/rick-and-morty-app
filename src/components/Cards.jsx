import Card from './Card';

function Cards ({characters, onClose}){
   return(
      <div>
         {
            characters.map((character) => {
               return <Card
                  key={character.id}
                  name = {character.name}
                  gender = {character.gender}
                  species = {character.species}
                  image = {character.image}
                  id = {character.id}
                  onClose={() => onClose(character.id)}

               />
            })
         }
      </div>
   )
}




export default Cards
