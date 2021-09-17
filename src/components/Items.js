import React,{useState} from 'react'

import "./Items.css"




function Items() {
    const [items, setItems] = useState([
            {
            id:1,
            name:"Projector",
            price:23500,
            description:"this is a projector"
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
        description: "this is a projector"
    }

]);

    return (
      <div className="items">
        {items.map((item) => (
          <div className="item">
            <h1>{item.name}</h1>
            <h1>{item.price}</h1>
            <h1>{item.description}</h1>
          </div>
        ))}
      </div>
    );
}

export default Items
