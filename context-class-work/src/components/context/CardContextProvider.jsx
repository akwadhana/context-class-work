import { useState } from "react";
import { createContext } from "react";

export const TheContext = createContext();

const CardContextProvider = ({children}) => {
  const [cardNumber, setCardNumber] = useState();
  const [cardName, setCardName] = useState("");
  const [month, setMonth] = useState();
  const [year, setYear] = useState();
  const [cvc, setCvc] = useState();

  const objectToBePassed = {
  cardName,
  setCardName,
  cardNumber,
  setCardNumber,
  month,
  setMonth,
  year,
  setYear,
  cvc,
  setCvc,
  };
  return (
    <TheContext.Provider value={objectToBePassed}>
      {children}
    </TheContext.Provider>
  );
};
export default CardContextProvider;
