import { useState } from "react";


const StateFulForm = () => {
    const [name,setName]=useState('Rajni Kant');
    const [email,setEmail]=useState(null);
    const [password,setPassword]=useState(null);
    const [error,setError]=useState('');


    const handleSubmit = e =>{
        e.preventDefault();
        if(password.length<6){
            setError('password should be more than 6 character')
        }else{
            setError('');
        }
        console.log(email);
        console.log(password,name)
        
       
    }

    const handleEmailChange = e =>{
        console.log(e.target.value);
        setEmail(e.target.value);
    }

    const handlePasswordChange = e =>{
        setPassword(e.target.value)
    }

    const handleName = e =>{
        setName(e.target.value)
    }
    return (
        <div>
            <form onSubmit={handleSubmit} >
                <input value={name} onChange={handleName} type="text" name="name" />
                <br />
                <input onChange={handleEmailChange} type="email" name="email" id="" />
                <br />
                <input onChange={handlePasswordChange} type="password" name="phone" />

                <br />
                <input type="submit" value="Submit" />
            </form>

            {
                error && <p>{error}</p>
            }
        </div>
    );
};

export default StateFulForm;