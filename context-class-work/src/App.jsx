import { useState, useContext } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card1 from "./components/Card1";
import cardTwo from "./image/images/bg-card-back.png";
import { TheContext } from "./components/context/CardContextProvider";


function App() {
const {
  cardName,
  setCardName,
  cardNumber,
  setCardNumber,
  month,
  setMonth,
  year,
  setYear,
  cvc,
  setCvc
} = useContext(TheContext )


  return (
    <>
      <div className="app">
        <div className="card">
          <Card1 />
        </div>


        <form className="form">
          <div className="topInput">
            <div>
              <label>CARDHOLDER NAME</label>
              <input type="text" placeholder="e. jane " value={cardName} onInput={(e) => setCardName(e.target.value)}/>
            </div>
            <div>
              <label>CARD NUMBER</label>
              <input type="text" placeholder="000000000"  value={cardNumber} onInput={(e) =>setCardNumber(e.target.value)}/>
            </div>
          </div>
          <div className="text-label">
            <div className="input-cover">
            <div className="input-group" >
              <label>Exp.DATE(MM/YY)</label>
              <div className="input-flex">
              <input type="number" placeholder="MM"  value= {month} onInput={(e)=> setMonth (e.target.value)} />
              <input type="number" placeholder="YY" value= {year} onInput={(e)=> setYear (e.target.value)}/>
            </div>
            </div>

            <div className="cvc">
              <label className="cv2" >CVC</label>
              <div className="input-fle">
              <input className="cv2" type="number" placeholder="e.g 123"  value= {cvc} onInput={(e)=> setCvc (e.target.value)}/>
            </div>
          </div>
          </div>
          </div>
          <button className="confirm">confirm</button>
        </form>
      </div>
    </>
  );
}

export default App;
