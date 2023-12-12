import { useState } from "react"


/* 
    function useState(initalValue){
        return [ initalValue ,() =>{} ]
    }

*/
function Counter() {
    let count = 100
    let [stateValue, setValue] = useState(99999)
    /* note state vaarialbe must not be changed directly only shall be
    change via mutator function */

    function incrementValue() {
        let newvalue = stateValue + 1
        // setValue( newvalue )
        setValue(stateValue + 1)
    }

    function increment() {
        count++
        console.log("increment...", count);
    }
    console.log("render");
    return <>
        <h1>Counter: {count}</h1>
        <h1>value: {stateValue}</h1>
        <hr />
        <button onClick={increment} >incremnt count</button>

        <button onClick={incrementValue} >incremnt state value</button>
    </>
}
export default Counter