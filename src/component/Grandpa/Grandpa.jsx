import { createContext } from "react";
import Aunty from "../Aunty/Aunty";
import Dad from "../Dad/Dad";
import Uncle from "../Uncle/Uncle";
import "./grandpa.css";



const RingContext = createContext('gold');


const Grandpa = () => {

    const ring = 'diamond';
  return (
    <div className="grandpa">
      <h2>Grandpa</h2>
   <RingContext.Provider value="gold">
   <section className="flex">
        <Dad ring={ring}></Dad>
        <Uncle></Uncle>
        <Aunty></Aunty>
      </section>
   </RingContext.Provider>
    </div>
  );
};

export default Grandpa;
