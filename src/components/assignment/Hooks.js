import React, {useState, useEffect} from 'react';


 const Hooks = () => {
    const[count,setCount] = useState(0);
    const[name, setName] = useState("");


   const onChange = (e) =>{
        setName(e.target.value);
        setCount(name.length+1);
    }
    return(
        <div>
            <h1>Your Entered {count} Letters</h1>
            <input type="text" name="fname" onChange={onChange}/>
        </div>
    );

}
export default Hooks;