import { createContext, useState } from "react";
import Aunty from "../Aunty/Aunty";
import Dad from "../Dad/Dad";
import Uncle from "../Uncle/Uncle";
import "./grandpa.css";

export const RingContext = createContext('gold');
export const MoneyContext = createContext(1000);


const Grandpa = () => {


    const [money,setMoney]= useState(1000)
    const ring = 'diamond';
  return (
    <div className="grandpa">
      <h2>Grandpa</h2>
      <p>Money:{money}</p>
<MoneyContext.Provider value={[money,setMoney]}>
<RingContext.Provider value="gold">
   <section className="flex">
        <Dad ring={ring}></Dad>
        <Uncle></Uncle>
        <Aunty></Aunty>
      </section>
   </RingContext.Provider>
</MoneyContext.Provider>
    </div>
  );
};

export default Grandpa;


/**
 * 1.create a contaxt and export it.
 * 2.add provider for the context with value.vlaue may be anything.
 * 3.useContext to access valuein the context api
 * 
 */
