import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [pokeArray, setPokeArray] = useState([])

  useEffect(() => {
    for(let i=1; i<10;i++){
      data = fetchPoke(i)
      console.log("data")
      console.log(data)
      setPokeArray([...pokeArray, data])
    }
  },[]);

  function fetchPoke(id) {
    console.log(`https://pokeapi.co/api/v2/pokemon/${id}`)
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then(response => {
        console.log("response")
        console.log(response)
        return response = response.json()
    })
    .then(response =>{
        console.log("response(json)")
        console.log(response)
        console.log(response.name)
        // console.log("PokeArray before")
        // console.log(pokeArray)
        //setPokeArray([...pokeArray, response])
        // console.log("PokeArray after")
        // console.log(pokeArray)
        // console.log(pokeArray[0].name)
        return response
    } )
    .catch(error => {
      console.log("error"+ error)
    })
  }


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