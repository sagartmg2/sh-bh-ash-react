import axios from "axios"
import { useState, useEffect } from "react"

function ApiUsersList() {
    console.log("redner");
    /* make api call */
    const [users, setUsers] = useState([])

    axios.get("https://jsonplaceholder.typicode.com/users")
        .then(res => {
            console.log(res)
            // setUsers(res.data)
            /* infinite loop
            usestate - triggers render
    
            */
        })


    return <>
        api users list.
        <ul className="p-4">
            {/* <li>ram</li>
            <li>shyam..</li>
            <li>hari..</li> */}
            {JSON.stringify(users)}
        </ul>
    </>
}

export default ApiUsersList