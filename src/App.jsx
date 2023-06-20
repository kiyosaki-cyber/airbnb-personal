import React from 'react'
import './App.css'
import Nav from "./nav"
import Hero from "./hero"
import Card from "./card"
import Data from "./data"
function App() {
  const cards =Data.map(item =>{
    return(
      <Card
      key={item.id}
      {...item} 
      />
    )
  })
   
  return (
    <>
      <Nav/>
      <Hero/>
     <div className="cardlist">
        {cards}
      </div> 
       
  
    </>
  )
}

export default App
