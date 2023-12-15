import { useState, useEffect } from "react"

function ApiUsersList() {

    // let selectedOption = null
    const [selectedOption, setSelectedOption] = useState("one")  // return [state,stateMuatatorFunction]
    let items = ["one", "two", "three", "four"]
    console.log("render..");
    return <>
        <h1 className="text-5xl">The user has selected {selectedOption}</h1>
        <hr className="my-5" />

        <ul className="pl-5">
            {
                items.map(el => {
                    return <li onClick={() => {
                        console.log(el)
                        setSelectedOption(el)
                        // selectedOption = el  // wrong // cannot change state directly
                        console.log({ selectedOption });
                    }} >{el}</li>
                })
            }
        </ul>
        <hr className="my-5" />
    </>
}

export default ApiUsersList