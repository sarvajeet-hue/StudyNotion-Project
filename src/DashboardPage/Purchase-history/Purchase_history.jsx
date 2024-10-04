import React from "react";
import { useSelector } from "react-redux";

const Purchase_history = () => {
  const { purchasedHistory } = useSelector((state) => state.purchased_History);
  console.log("PurchasedHistory", purchasedHistory);
  return (
    <div>
      <div  className="flex  border rounded-md p-5 gap-10 ">
        <img
          src={purchasedHistory.thumNail}
          alt=""
          className="h-[200px] w-[300px]"
        />

        <div className="font-bold flex flex-col gap-6">
          <p>Course Name : {purchasedHistory.courseName}</p>
          <p>{purchasedHistory.WhatYouWillLearn}</p>
          <p> Price : ${purchasedHistory.Price}</p>
        </div>
      </div>
    
    </div>  
  );
};

export default Purchase_history;
