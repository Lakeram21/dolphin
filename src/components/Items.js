import React, { useState } from 'react'
import Projector from '../pictures/projector.jpg'

import "./Items.css"




function Items() {
  // console.log("project ----",Projector)
  const [items, setItems] = useState([
    {
      id: 1,
      name: "Projector",
      price: 23500,
      description: "this is a projector"
    },
    {
      id: 2,
      name: "Projector-hp",
      price: 27500,
      description: "this is a projector"
    },
    {
      id: 3,
      name: "Projector-dell",
      price: 23500,
      description: "this is a projector",
      images: ""
    }, {
      id: 4,
      name: "Projector-dell",
      price: 23500,
      description: "this is a projector"
    }, {
      id: 5,
      name: "Projector-dell",
      price: 23500,
      description: "this is a projector"
    }, {
      id: 6,
      name: "Projector-dell",
      price: 23500,
      description: "this is a projector"
    }

  ]);

  return (
    <div className="items">
      
      {items.map((item) => (
        <div className="item">
          {/* \src\pictures\v13h010l49.png */}
          
          <img src= "https://media.wired.com/photos/598e35fb99d76447c4eb1f28/m aster/pass/phonepicutres-TA.jpg" alt='logo' height='193'/>
          <h1>{item.name}</h1>
          <h1>Item id: {item.id}</h1>
          <h1>{item.price}</h1>
          <h1>{item.description}</h1>

        </div>
      ))}
    </div>
  );
}

export default Items
