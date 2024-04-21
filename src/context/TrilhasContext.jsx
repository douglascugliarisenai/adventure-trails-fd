/* eslint-disable */
import { createContext, useEffect, useState } from "react";
import getJson from "../hooks/getJson";

export const TrilhasContext = createContext();

export const TrilhasContextProvider = ({ children }) => {
 const [dados, isLoading] = getJson("/data/cards.json");
 const [trilhas, setTrilhas] = useState([]);

 useEffect(() => {
  console.log(dados);
  if (!!dados && !isLoading) {
   setTrilhas(dados.trilhas);
  }
 }, [dados]);

 function addTrail(trailData) {
  setTrilhas((t) => [...t, trailData]);
 }

 return (
  <TrilhasContext.Provider value={{ trilhas, setTrilhas, isLoading, addTrail }}>
   {children}
  </TrilhasContext.Provider>
 );
};
