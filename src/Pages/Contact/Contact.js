import React, { useState } from 'react';
 
const Contact = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [number, setNumber] = useState("");
   
    return (
        <div>
         <h1>My contact page</h1>
         <form>
            <input type="text" placeholder="enter name" value={name} />
            <input type="email" placeholder="enter email" value={email} />
            <input type="number" placeholder="enter number" value={number} />
            <button type="submit"> Submit </button>
         </form>
        </div>
    )
}

export default Contact
