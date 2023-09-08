import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [pokeArray, setPokeArray] = useState([])

  useEffect(() => {
    for(let i=1; i<10;i++){
      console.log(`https://pokeapi.co/api/v2/pokemon/${i}`)
      fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
      .then(response => {
          console.log("response")
          console.log(response)
          return response = response.json()
      })
      .then(response =>{
        console.log("response(json)")
        console.log(response)
        console.log(response.name)
        console.log("PokeArray before")
        console.log(pokeArray)
        setPokeArray([...pokeArray, response])
        console.log("PokeArray after")
        console.log(pokeArray)
        console.log(pokeArray[0].name)
        return null
      } )
      .catch(error => {
        console.log("error"+ error)
    })
    }

  },[]);



  return (
    <>
    Pokemon:
      {
      pokeArray.map((poke, index)=> 
      <div key={index}>{poke.name}</div>)}
    </>
  )
}


export default App