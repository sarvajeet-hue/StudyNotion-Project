import React from 'react'
import { useSelector } from 'react-redux'


const Purchase_history = () => {

  const {purchasedHistory} = useSelector((state) => state.purchased_History)
  console.log("PurchasedHistory" , purchasedHistory)
  return (
    <div>
      
    </div>
  )
}

export default Purchase_history
