
import Brother from '../Brother/Brother';
import MySelf from '../MySelf/MySelf';
import Sister from '../Sister/Sister';

const Dad = ({ring}) => {
    
    return (
        <div>
            <h2>dad</h2>

            <section className='flex'>
                <MySelf ring={ring}></MySelf>
                <Brother></Brother>
                <Sister></Sister>
            </section>
        </div>
    );
};

export default Dad;