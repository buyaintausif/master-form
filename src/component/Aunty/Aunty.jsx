import React, { useContext } from 'react';
import Cousin from '../Cousin/Cousin';
import { MoneyContext } from '../Grandpa/Grandpa';

const Aunty = () => {

    const [money,setMoney]=useContext(MoneyContext);
    return (
        <div>
            <h2>aunty</h2>

            <section className='flex'>
                <Cousin name={'Sheik rasel'}></Cousin>
                <Cousin name={'Sheik rahana'}></Cousin>
            </section>

            <p>
                money:{money}
            </p>
            <button onClick={()=>{
                setMoney(money+1000);
            }}>Add 1000 more </button>
        </div>
    );
};

export default Aunty;