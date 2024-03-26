import Special from "../Special/Special";


const MySelf = ({ring}) => {
    
    return (
        <div>
            <h2>My Self</h2>
            <Special ring={ring}></Special>
        </div>
    );
};

export default MySelf;


/**
 * 1.create a contaxt and export it.
 * 2.add provider for the context with value
 */