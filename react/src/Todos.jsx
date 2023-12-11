/* api request */
let todosString = ["html", "css", "js", "react", "express"]
let todos = [
    { title: "html", status: true },
    { title: "css", status: true },
    { title: "js", status: true },
    { title: "react", status: false }
]

/* 
let todosinHTML = todos.map(el =>{
    return <li> {el} </li>
})
console.log({todosinHTML})
 */

let description = "loream ipsum .....asd f"
description = { content: "lorem icpusm..." }


const Todos = () => {
    return <>
        <h1>Todos ( {todos.length} )</h1>
        <p>{JSON.stringify(description)}</p>
        <ul>
            {
                todosString.map(el => {
                    return <li>{el}</li>
                })
            }
        </ul>

        <table>
            <thead>
                <tr>
                    <th>title</th>
                    <th>status</th>
                </tr>
            </thead>
            <tbody>
                {
                    todos.map(el => {

                        /*
                         let statusText = "pedning";
                        if(el.status){
                            statusText = "complted"
                        }
    
                        statusText = el.status ? "complted" : "pending."
                        
                        */
                        return <tr key={el.title}>
                            <td>{el.title}</td>
                            <td>{el.status ? "complted" : "pending"}</td>
                        </tr>

                    })
                }
            </tbody>

        </table>
    </>
}
export default Todos