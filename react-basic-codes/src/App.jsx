import Course from "./Course"
import User from "./User"
import Todos from "./Todos"
import Counter from "./Counter"

import Glass from "./assets/images/glasses.jpg"
import DeleteButton from "./components/DeleteButton"
import EditButton from "./components/EditButton"
import { useState } from "react"

let usersStyle = {
    display: "flex",
    gap: ".5rem"
}

let courses = ["react", "node", "javascript"]

function App() {
    const [showCounter, setShowCounter] = useState(false)


    return <>
        <button className="btn"
            onClick={() => {
                setShowCounter(!showCounter)
            }}
        >show/hide counter</button>
        <hr />
        {
            showCounter
            &&
            <Counter />
        }
    </>
    return (
        <div>
            <Counter />
            <Todos />

            <hr />
            <h1 className="text-red-500 text-5xl mb-8 ">Courses</h1>
            {/* replace below code using course.map */}
            {
                courses.map(el => <Course title={el} />)
            }

            {/* 
            <Course title={"react"} />
            <Course title={"node"} />
            <Course title="js" /> 
            */}
            <h2>Users</h2>

            <div style={usersStyle} >
                <User />
                <User />
                <User />
                <User />
                <User />
            </div>

            <table style={{ marginTop: "1rem" }}>
                <tr>
                    <th>Name</th>
                    <th>email</th>
                    <th>Actions</th>
                </tr>
                <tr>
                    <td>xyz</td>
                    <td>xyz@gmail.com</td>
                    <td> <EditButton /> <DeleteButton /> </td>
                </tr>
                <tr>
                    <td>xyz</td>
                    <td>xyz@gmail.com</td>
                    <td></td>
                </tr>
                <tr>
                    <td>xyz</td>
                    <td>xyz@gmail.com</td>
                    <td></td>
                </tr>
            </table>

            {/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzC7lYEmBdECVgCcD6baNolLAW0QR7FZQHg2mcEeNGeoxKNwa1qnG0PgEQJTH-EHhm2vk&usqp=CAU" alt="" /> */}

            <img src="./assets/images/glasses.jpg" alt="" />
            <img src={Glass} alt="" />
            <img src="/react.png" alt="" />
            <img src="/vite.svg" alt="" />

        </div>
    )
}

export default App