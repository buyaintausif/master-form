import { useContext } from "react";
import { RingContext } from "../Grandpa/Grandpa";


const Cousin = ({name}) => {

    const giftTwo= useContext(RingContext);
    return (
        <div>
            <h2>Cousin</h2>
            <p>{name}</p>
            <p>Got {giftTwo}</p>
        </div>
    );
};

export default Cousin;