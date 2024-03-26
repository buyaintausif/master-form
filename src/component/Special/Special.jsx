import { useContext } from "react";
import { RingContext } from "../Grandpa/Grandpa";


const Special = ({ring}) => {
    const gift = useContext(RingContext)
    return (
        <div>
            <h2>Special ={ring}</h2>
            <p>get one more{gift}</p>
        </div>
    );
};

export default Special;