import { useEffect, useState } from "react"


/* 
    function useState(initalValue){
        return [ initalValue , () =>{} ]
    }

*/
function Counter() {

    console.log("render");
    // let count = 100
    let [count, setCount] = useState(99999)
    let [stateValue, setValue] = useState(99999)
    /* note state vaarialbe must not be changed directly only shall be
    change via mutator function */
    function incrementValue() {
        // stateValue = stateValue + 1
        // return;
        let newvalue = stateValue + 1
        // setValue( newvalue )
        setValue(stateValue + 1)
    }

    function increment() {
        setCount(count + 1)
        return;
        count++
        console.log("increment...", count);
    }

    useEffect(() => {
        console.log("compojnendDidMount..");
    }, []) /* dependency array */

    useEffect(() => {
        console.log("compojnendDidUpdate..");
    }, [stateValue])  /* depenedent on stateValue */


    // console.log("componendDidUpdate..");
    // console.log("componendDidUnMount..");


    return <>

        <h1 className="text-xl">Counter: <span className="text-2xl font-bold">{count}</span></h1>
        <h1 className="text-xl">value: <span className="text-2xl font-bold">{stateValue}</span></h1>
        <hr className="my-4" />
        <div className="flex gap-4 ">
            <button
                onClick={increment}
                className="border border-gray-600 bg-slate-300 rounded-xl px-4 py-2 hover:text-white hover:bg-slate-400 hover:shadow-xl "
            >
                incremnt normal count variable
            </button>
            <button onClick={incrementValue} className="border border-gray-600 bg-slate-300 rounded-xl px-4 py-2 " >incremnt state value</button>

        </div>
    </>
}
export default Counter