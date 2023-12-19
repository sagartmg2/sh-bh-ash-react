import axios from "axios"
import { useState } from "react"

function ApiComments() {
    const [comments, setComments] = useState([])

    function fetchApi() {
        /* make api requrest */
        let apiData  = ["one","two","three","four"]

        /* request methods
            get - read
            post - create
            put/patch - update
            delete 
        */
        axios.get("https://jsonplaceholder.typicode.com/comments")
        .then(res =>{
            console.log(res.data) // [ {},{}]
            setComments(res.data)
        })
    }

    return <>
        <button className="btn" onClick={fetchApi}>fetch apis</button>
        <hr />
        <div className="text">api comments</div>
        <ul className="pl-10 list-disc">
            {
                comments.map(el => {
                    return <li>{el.body}</li>
                })
            }
        </ul>

    </>
}

export default ApiComments