import { useState, useEffect } from 'react' // note that we had to import useEffect
import './App.css'

function App() {
  const [pokeArray, setPokeArray] = useState([])

  useEffect(() => {
      fetch(`https://pokeapi.co/api/v2/pokemon?limit=807`) // adding the 'limit' here was key, otherwise it would only return the first 20 in the 'results' array
      .then(response => {
        return response = response.json()
      })
      .then(response =>{
        // console.log("response(json)")
        // console.log(response)
        // Within the returned JSON, there is a 'results' array.
        // Below, we set the 'pokeArray' to the 'results' arrar
        setPokeArray(response.results)
      })
      .catch(error => {
        console.log("error"+ error)
      })
    }
  ,[]);

  return (
    <ol>
    POKEMON:
      {
      pokeArray.map((poke, index)=> 
      <li key={index}>{poke.name}</li>)}
    </ol>
  )
}

export default App