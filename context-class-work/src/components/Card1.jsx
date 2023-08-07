import React, { useContext } from "react";
import { TheContext } from "./context/CardContextProvider";
// import './App.css'
import cardOne from "../image/images/bg-card-front.png";
import cardTwo from "../image/images/bg-card-back.png";

const Card1 = () => {
  const { cardNumber, cardName, month,year, cvc} = useContext(TheContext);
  return (
    <div className="card1Main">
      <div>
        <p>{cardNumber}</p>
        <p>{cardName}</p>
        <p>{month}</p>
        <p>{year}</p>
        <p>{cvc}</p>
      
      </div>

      <div className="class1MainImg">
        <img src={cardOne} />
        <img src={cardTwo} />
      </div>
    </div>
  );
};

export default Card1;
