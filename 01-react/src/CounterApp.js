import React, {Fragment, useState} from "react";
import PropTypes from "prop-types";

const CounterApp = ({value}) => {

    const [counter, setCounter] = useState(value)
    //handleAdd

    const handleAdd = (e) => {
        // setCounter(counter + 1);
        setCounter((c) => c + 1);
    }
    const minus = (e) => {
        // setCounter(counter + 1);
        setCounter((c) => c - 1);
    }
    const reset = (e) => {
        // setCounter(counter + 1);
        setCounter(value);
    }

    return (
        <>
            <h1>CounterApp</h1>
            <h2> {counter}</h2>
            {/*<button onClick={function () {*/}

            {/*    console.log(123);*/}
            {/*}}>+1</button>*/}
            <button onClick={(e) => handleAdd(e)}>+1</button>
            <button onClick={(e) => reset(e)}>Reset</button>
            <button onClick={(e) => minus(e)}>-1</button>
        </>
    )
}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired
}
export default CounterApp;
