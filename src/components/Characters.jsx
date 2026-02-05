import { useState } from "react"
import allCharacters from "../data/characterList.json"
// console.log(allCharacters)

function Characters() {

  const [randomCharacter, setRandomCharacter] = useState(null)
  const [favouriteList, setFavouriteList] = useState([])
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
      // favouriteList.push(randomCharacter)// mutating the state :(

      // instead, we clone it
      let clone = [...favouriteList]
      clone.push(randomCharacter) 

      setFavouriteList(clone)

      // setFavouriteList([...favouriteList, randomCharacter])
  }

  const handleRemoveFromFavourite = (index) => {
    console.log("trying to remove a character", index) // 42

    //? how to I know which character am I trying to remove?
    //? how do we remove it from the fav list?

    // [{id: 81}, {id: 42}, {id: 33}, {id: 8}]

    //* solution with id & filter
    // let filteredArr = favouriteList.filter((eachFav) => {
    //   return eachFav.id !== id
    // })
    // setFavouriteList(filteredArr)

    //* solution with index & splice
    let clone = [...favouriteList]
    clone.splice(index, 1)
    setFavouriteList(clone)

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
        {favouriteList.map((eachFavourite, index) => {

            return (
              <div className="card fav-card" key={eachFavourite.id}>
                <h5>Name: {eachFavourite.name} </h5>
                <p>Description: {eachFavourite.description}</p>

                <button onClick={() => handleRemoveFromFavourite(index)}>Remove from Fav</button>
              </div>
            )

        })}
      </div>
    </div>
  )
}
export default Characters