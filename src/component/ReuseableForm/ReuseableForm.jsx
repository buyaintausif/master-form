import React from 'react';

const ReuseableForm = ({formTitle, submitBtnText='Submit',handleSubmit,children}) => {

 const handleLocalSubmit = e =>{
    e.preventDefault();

    const data ={
        name:e.target.name.value,
        email:e.target.email.value,
        phone:e.target.phone.value,

    }
    handleSubmit(data);


 }
    return (
        <div>
            {children}
            <h2>{formTitle}</h2>
            <form onSubmit={handleLocalSubmit} >
                <input type="text" name="name" />
                <br />
                <input type="email" name="email" id="" />
                <br />
                <input type="text" name="phone" />

                <br />
                <input type="submit" value={submitBtnText} />
            </form>
        </div>
    );
};

export default ReuseableForm;