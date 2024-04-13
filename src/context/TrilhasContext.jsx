/* eslint-disable */
import { createContext, useEffect, useState } from "react";
import getJson from "../hooks/getJson";

export const TrilhasContext = createContext();

export const TrilhasContextProvider = ({ children }) => {
 const [dados, isLoading] = getJson("../../public/data/cards.json");
 const [trilhas, setTrilhas] = useState([]);

 useEffect(() => {
  console.log(dados);
  if (!!dados && !isLoading) {
   setTrilhas(dados.trilhas);
  }
 }, [dados]);

 return (
  <TrilhasContext.Provider value={{ trilhas, setTrilhas, isLoading }}>
   {children}
  </TrilhasContext.Provider>
 );
};
