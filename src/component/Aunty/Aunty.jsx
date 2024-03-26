import React from 'react';
import Cousin from '../Cousin/Cousin';

const Aunty = () => {
    return (
        <div>
            <h2>aunty</h2>

            <section className='flex'>
                <Cousin name={'Sheik rasel'}></Cousin>
                <Cousin name={'Sheik rahana'}></Cousin>
            </section>
        </div>
    );
};

export default Aunty;