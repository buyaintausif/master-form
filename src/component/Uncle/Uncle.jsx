import React from 'react';
import Cousin from '../Cousin/Cousin';

const Uncle = () => {
    return (
        <div>
           <h2>uncle</h2> 

           <section className='flex'>
            <Cousin name={'Sheikh majis'}></Cousin>
            <Cousin name={'Hasina'}></Cousin>
           </section>
        </div>
    );
};

export default Uncle;