import { useState } from "react"
import allCharacters from "../data/characterList.json"
console.log(allCharacters)

function Characters() {

  const [randomCharacter, setRandomCharacter] = useState(null)
  const [favouriteList, setFavouriteList] = useState([{
    id: 175,
    name: "Dobby",
    description: "House-elf originally belonging to the Malfoy family until he is set free by Harry in Chamber of Secrets."
  }])
  // console.log(favouriteList)

  const handleAddRandomCharacter = () => {
    const randomIndex = Math.floor(Math.random() * allCharacters.length) // 0 -203
    const randomChar = allCharacters[randomIndex]

    setRandomCharacter(randomChar)
  }

  const handleAddToFavourite = () => {
      // push
      // we are getting the current random Char and adding to the list of favourites.
      console.log(randomCharacter)
      let clone = [...favouriteList]
      clone.push(randomCharacter) // mutating the state :(

      setFavouriteList(clone)

      // setFavouriteList([...favouriteList, randomCharacter])
  }

  return (
    <div className="characters-container">
      
      <div id="random">
        <h2>Harry Potter Characters</h2>
        <button onClick={handleAddRandomCharacter}>Find Random Character</button>

        {randomCharacter !== null && (
          <div className="card random-card">
            <h4>Random Character</h4>
            <h5>Name: {randomCharacter.name} </h5>
            <p>Description: {randomCharacter.description}</p>

            <button onClick={handleAddToFavourite}>Add to Favourite</button>
          
          </div>
        )}

      </div>

      <div id="fav">

        <h2>Favourite Characters</h2>
        {favouriteList.map((eachFavourite) => {

            return (
              <div className="card fav-card">
                <h5>Name: {eachFavourite.name} </h5>
                <p>Description: {eachFavourite.description}</p>

                <button>Remove from Fav</button>
              </div>
            )

        })}

      </div>

    </div>
  )
}
export default Characters