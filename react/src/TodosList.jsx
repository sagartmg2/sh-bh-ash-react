import { useState } from "react";

function TodosList() {
    // let todos = ["html", "css", "js"]  //convert this to state varaible i.e using useState
    const [todos, setTodos] = useState([
        {
            title: "html",
            status: "completed."
        },
        {
            title: "CSS",
            status: "completed."
        },
        {
            title: "js",
            status: "completed."
        },
    ])

    const [pageTitle, setPageTile] = useState("todos")

    const handleFormSubmit = (e) => {
        e.preventDefault(); // prevents page refresh on form submit
        // console.log(e.target); // form
        // console.log(e.target.title); // element which has name-attribte:title 
        // console.log(e.target.title.value); // input elements value 

        let userInput = e.target.title.value
        let userInputStatus = e.target.status.value
        // todos.push(userInput) // should not chgange state varialbe direclty
        let temp = [...todos] // ... spread operator  // research: reference data types
        temp.push({
            title: userInput,
            status: userInputStatus
        })  // [html,css]
        setTodos(temp)
        console.log({ todos });
    }

    function deleteTodo(index) {
        console.log("deleted index", index);
        let remainingTodos = [...todos]
        /* code here to delete */
        setTodos(remainingTodos) // re-render gets trigreed
    }

    function resetTodo() {
        console.log("deleted index");
        setTodos([])
    }

    console.log("redner...");
    return <>
        <h1 className="text-5xl">Todos List</h1>
        <hr className="my-5" />
        <form onSubmit={handleFormSubmit}>
            <input name="title" type="text" placeholder="title" className="border border-black" />
            {/* <input name="status" type="text" placeholder="status" className=" border border-black" /> */}
            <select name="status" id="" className="border border-black">
                <option value="">select</option>
                <option value="true">true</option>
                <option value="false">false</option>
            </select>

            <button className="bg-gray-300">add to List</button>
        </form>
        {/* onChange */}
        <button onClick={resetTodo} className="border bg-stone-300">Reset todos</button>
        <ul className="pl-10 list-disc">
            {
                todos.map((el, index) => {
                    return <li >
                        {el.title} ( {el.status})
                        <button onClick={() => {
                            deleteTodo(index)
                        }} className="bg-slate-300">delete</button>
                    </li>
                })
            }
        </ul>

        <div className="mt-10">
            research on
            localstorage,
            JSON.stringifify(),
            JSON.parse()
        </div>
    </>
}

export default TodosList