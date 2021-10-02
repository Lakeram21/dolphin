import React, { useState, useEffect } from 'react'
import axios from 'axios'

import Projector from '../pictures/projector.jpg'

import "./Items.css"




function HomeItems() {
  // console.log("project ----",Projector)
  const [items, setItems] = useState([]);
  const getProduct = () => {
    // the backend and the front end are both running on different server
    // so when the client clicke on the button a post is send to the backend
    // 
    axios.get('http://localhost:5000/api/product', { headers: { 'Authorization': `token` } }).then((response) => {
      const queueInfomation = response.data
      setItems(queueInfomation)
      console.log(`que information ${queueInfomation}`)
      // setqueueInfo({ ...queueInfo, queueId: queueInfomatio })

    })
  }
  useEffect(() => {
    getProduct();
  }, []);

  return (
    <div className="items">

      {items.map((item) => (
        <div className="item">
          {/* \src\pictures\v13h010l49.png */}

          <img src="https://media.wired.com/photos/598e35fb99d76447c4eb1f28/m aster/pass/phonepicutres-TA.jpg" alt='logo' height='193' />
          <h1> ProductName :{item.productName}</h1>
          <h1>ProductCode: {item.productCode}</h1>
          <h1>ProductPrice{item.price}</h1>
          <h1>{item.description}</h1>

        </div>
      ))}
    </div>
  );
}

export default HomeItems
