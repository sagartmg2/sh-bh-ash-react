import { useState } from "react";

function TodosList() {
    // let todos = ["html", "css", "js"]  //convert this to state varaible i.e using useState
    const [todos, setTodos] = useState([])
    // const [todos, setTodos] = useState(["html", "css", "js"])

    const handleFormSubmit = (e) => {
        e.preventDefault(); // prevents page refresh on form submit
        console.log(e.target); // form
        console.log(e.target.title); // element which has name-attribte:title 
        console.log(e.target.title.value); // input elements value 

        let userInput = e.target.title.value
        // todos.push(userInput) // should not chgange state varialbe direclty
        let temp = [...todos] // ... spread operator  // research: reference data types
        temp.push(userInput)
        setTodos(temp)
        console.log({ todos });
    }

    return <>
        <h1 className="text-5xl">Todos List</h1>
        <hr className="my-5" />
        <form onSubmit={handleFormSubmit}>
            <input name="title" type="text" placeholder="title" className="border border-black" />
            <input name="status" type="text" placeholder="status" className=" border border-black" />
            <button className="bg-gray-300">add to List</button>
        </form>
        {/* onChange */}
        <ul className="pl-10 list-disc">
            {
                todos.map(el => {
                    return <li>{el}</li>
                })
            }
        </ul>
    </>
}

export default TodosList