
import {useState} from "react";
import '../App.css';

function Counter(prop){

    const [counter, setCounter] =    useState(prop.value);

    const handleChange = (value) => {
        setCounter(counter + value);
    }

    const mul = () => {
        setCounter(counter * 2)
    }

    return(
        <div className="a">
        <h1>counter : {counter}</h1>
        <button className="b" onClick={() => {
          handleChange(1)
        }}>Increment</button>
        <button className="b" onClick={() => {
            if(counter > 0){
                handleChange(-1)
            }          
        }}>Decrement</button>
        <button className="b" onClick={() => {
            if(counter > 0){mul()}          
        }}>Double</button>
        </div>
    )
}

export {Counter}