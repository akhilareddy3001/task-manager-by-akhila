import { useState } from "react";
import Navbar from "../components/Navbar";
function Counter(){
    const[count, setCount] = useState(0);
    return(
        <div>
            <Navbar />
            <h1>Counter App</h1>
            <h2>Count:{count}</h2>
            <button onClick={()=>setCount(count+1)}>Increase</button>
        </div>
    );

}
export default Counter;