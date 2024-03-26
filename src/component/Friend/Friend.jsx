import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';

const Friend = () => {

    const giftToFr= useContext(RingContext);
    return (
        <div>
            <h2>Sodan </h2>
            <p>got {giftToFr}</p>

        </div>
    );
};

export default Friend;